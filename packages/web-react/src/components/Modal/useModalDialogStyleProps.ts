import { ElementType, CSSProperties } from 'react';
import { ModalDialogCSSHeight, ModalDialogCSSHeightBreakpoints, ModalDialogProps } from '../../types';

interface CustomizedHeightCSSProperties extends CSSProperties {
  [key: string]: string | undefined | number;
}

const setCustomHeight = (
  baseVarName: string,
  propValue: ModalDialogCSSHeight | ModalDialogCSSHeightBreakpoints | undefined,
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

export const useModalDialogStyleProps = <E extends ElementType>(props: ModalDialogProps<E>) => {
  const { height, maxHeight, ...otherProps } = props;

  const customizedHeightStyle = {
    ...setCustomHeight('modal-dialog-height', height),
    ...setCustomHeight('modal-dialog-max-height', maxHeight),
  };

  return {
    modalDialogStyleProps: customizedHeightStyle,
    props: otherProps,
  };
};
