import classNames from 'classnames';
import { ElementType } from 'react';
import { BorderColors } from '../../constants';
import { SpiritBoxProps } from '../../types';

export interface UseBoxStyleProps<T> {
  /** className props */
  classProps: string;
  /** Props for the box element. */
  props: T;
}

export const useBoxStyleProps = (
  props: Partial<SpiritBoxProps<ElementType>>,
): UseBoxStyleProps<Partial<SpiritBoxProps<ElementType>>> => {
  const { backgroundColor, borderColor, borderRadius, borderStyle, borderWidth, ...restProps } = props || {};
  const boxBackgroundColor = backgroundColor ? `bg-${backgroundColor}` : '';
  let boxBorderColor = borderColor ? borderColor.replace('', 'border-') : '';
  let boxBorderRadius = '';
  let boxBorderStyle = '';
  const boxBorderWidth = borderWidth ? borderWidth.replace('', 'border-') : '';

  if (borderWidth && parseInt(borderWidth, 10) > 0) {
    boxBorderStyle = `border-${borderStyle}`;
    boxBorderRadius = borderRadius ? borderRadius.replace('', 'rounded-') : '';
    if (!borderColor) {
      boxBorderColor = `border-${BorderColors.BASIC}`;
    }
  }

  const boxClasses = classNames(boxBackgroundColor, boxBorderColor, boxBorderRadius, boxBorderStyle, boxBorderWidth);

  return {
    classProps: boxClasses,
    props: restProps,
  };
};
