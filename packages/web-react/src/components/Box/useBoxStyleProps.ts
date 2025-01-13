import classNames from 'classnames';
import { ElementType } from 'react';
import { BorderColors } from '../../constants';
import { useClassNamePrefix } from '../../hooks';
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
  const boxBackgroundClassName = useClassNamePrefix(`bg-${backgroundColor}`);
  const boxBorderClassName = useClassNamePrefix('border-');
  const boxRadiusClassName = useClassNamePrefix('rounded-');

  const boxBackgroundColor = backgroundColor ? boxBackgroundClassName : '';
  let boxBorderColor = borderColor ? borderColor.replace('', boxBorderClassName) : '';
  let boxBorderRadius = '';
  let boxBorderStyle = '';
  const boxBorderWidth = borderWidth ? borderWidth.replace('', boxBorderClassName) : '';

  if (borderWidth && parseInt(borderWidth, 10) > 0) {
    boxBorderStyle = `${boxBorderClassName}${borderStyle}`;
    boxBorderRadius = borderRadius ? borderRadius.replace('', boxRadiusClassName) : '';
    if (!borderColor) {
      boxBorderColor = `${boxBorderClassName}${BorderColors.BASIC}`;
    }
  }

  const boxClasses = classNames(boxBackgroundColor, boxBorderColor, boxBorderRadius, boxBorderStyle, boxBorderWidth);

  return {
    classProps: boxClasses,
    props: restProps,
  };
};
