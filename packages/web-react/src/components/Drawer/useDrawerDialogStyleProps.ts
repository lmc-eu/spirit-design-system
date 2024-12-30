import { ElementType, CSSProperties } from 'react';
import { DrawerDialogCSSHeight, ModalDialogCSSHeightBreakpoints, DrawerDialogProps } from '../../types';

interface CustomizedHeightCSSProperties extends CSSProperties {
  [key: string]: string | undefined | number;
}

const setCustomHeight = (
  baseVarName: string,
  propValue: DrawerDialogCSSHeight | ModalDialogCSSHeightBreakpoints | undefined,
): CustomizedHeightCSSProperties => {
  if (!propValue) return {};

  if (typeof propValue === 'object') {
    return Object.keys(propValue).reduce((acc, key) => {
      const suffix = key === 'mobile' ? '' : `-${key}`;
      const propName = `--${baseVarName}${suffix}`;
      acc[propName] = propValue[key as keyof ModalDialogCSSHeightBreakpoints]?.toString();

      return acc;
    }, {} as CustomizedHeightCSSProperties);
  }
  const propName = `--${baseVarName}`;

  return { [propName]: propValue?.toString() } as CustomizedHeightCSSProperties;
};

export const useDrawerDialogStyleProps = <E extends ElementType>(props: DrawerDialogProps<E>) => {
  const { height, maxHeight, ...otherProps } = props;

  const customizedHeightStyle = {
    ...setCustomHeight('drawer-dialog-height', height),
    ...setCustomHeight('drawer-dialog-max-height', maxHeight),
  };

  return {
    drawerDialogStyleProps: customizedHeightStyle,
    props: otherProps,
  };
};
