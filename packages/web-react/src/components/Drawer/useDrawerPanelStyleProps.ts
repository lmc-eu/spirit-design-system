import { ElementType, CSSProperties } from 'react';
import { DrawerPanelCSSHeight, DrawerPanelProps, DrawerPanelCSSHeightBreakpoints } from '../../types';

interface CustomizedHeightCSSProperties extends CSSProperties {
  [key: string]: string | undefined | number;
}

const setCustomHeight = (
  baseVarName: string,
  propValue: DrawerPanelCSSHeight | DrawerPanelCSSHeightBreakpoints | undefined,
): CustomizedHeightCSSProperties => {
  if (!propValue) return {};

  if (typeof propValue === 'object') {
    return Object.keys(propValue).reduce((acc, key) => {
      const suffix = key === 'mobile' ? '' : `-${key}`;
      const propName = `--${baseVarName}${suffix}`;
      acc[propName] = propValue[key as keyof DrawerPanelCSSHeightBreakpoints]?.toString();

      return acc;
    }, {} as CustomizedHeightCSSProperties);
  }
  const propName = `--${baseVarName}`;

  return { [propName]: propValue?.toString() } as CustomizedHeightCSSProperties;
};

export const useDrawerPanelStyleProps = <E extends ElementType>(props: DrawerPanelProps<E>) => {
  const { height, maxHeight, ...otherProps } = props;

  const customizedHeightStyle = {
    ...setCustomHeight('drawer-panel-height', height),
    ...setCustomHeight('drawer-panel-max-height', maxHeight),
  };

  return {
    drawerPanelStyleProps: customizedHeightStyle,
    props: otherProps,
  };
};
