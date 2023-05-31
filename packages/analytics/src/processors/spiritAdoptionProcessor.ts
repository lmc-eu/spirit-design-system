import { path } from 'zx';
import { getModuleName } from '../helpers';
import { ROOT_PATH } from '../constants';
import { Component } from '../types';

const OUTPUT_FILE = path.resolve(__dirname, '../.scanner/adoption-data-react.json');

const getRelativePath = (absolutePath: string) => path.relative(ROOT_PATH, absolutePath);

interface ForEachComponentOptions {
  componentName: string;
  component: Component;
}

type ForEachComponentHandler = (options: ForEachComponentOptions) => void;
type Sorter = (component: Component) => unknown;

interface SpiritAdoptionProcessorOptions {
  forEachComponent: (callback: ForEachComponentHandler) => unknown;
  sortObjectKeysByValue: (arg0: unknown, arg1?: Sorter) => unknown;
  output: (arg0: unknown, arg1: string) => void;
}

const spiritAdoptionProcessor = ({
  forEachComponent,
  sortObjectKeysByValue,
  output,
}: SpiritAdoptionProcessorOptions) => {
  let scannedComponents = {};

  forEachComponent(({ componentName, component }: ForEachComponentOptions) => {
    const { instances } = component;

    if (!instances) {
      return;
    }

    scannedComponents = instances.reduce((acc, currentInstance) => {
      const moduleName = getModuleName(currentInstance, componentName);
      const componentFullName = `${moduleName}:${componentName}`;

      // don't return same-file components (subcomponents)
      if (!moduleName) {
        return acc;
      }

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore index as string
      const currentComponentScan = acc[componentFullName] || [];
      const componentPathAndProps = {
        path: `${getRelativePath(currentInstance.location.file)}:${currentInstance.location.start.line}`,
        props: sortObjectKeysByValue(currentInstance.props),
      };

      return {
        ...acc,
        [componentFullName]: [...currentComponentScan, componentPathAndProps],
      };
    }, scannedComponents);
  });

  const sortedScannedComponents = sortObjectKeysByValue(
    scannedComponents,
    (component: Component) => component.instances,
  );

  // write result to file
  output(sortedScannedComponents, OUTPUT_FILE);

  return sortedScannedComponents;
};

export default spiritAdoptionProcessor;
