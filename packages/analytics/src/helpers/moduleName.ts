import { Instance } from '../types';

export const getModuleName = (instance: Instance, componentName: string) => {
  // HTML elements
  if (typeof instance.importInfo === 'undefined' && componentName === componentName.toLowerCase()) {
    return 'html_element';
  }

  // same-file components (used only in the same file where are defined)
  if (typeof instance.importInfo === 'undefined') {
    return null;
  }

  const { moduleName } = instance.importInfo;

  // project components (import starts with ./ or ../)
  if (/^\./.test(moduleName)) {
    return 'local_component';
  }

  // external libraries
  return moduleName;
};
