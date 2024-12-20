import classNames from 'classnames';
import { CSSProperties, ElementType } from 'react';
import { BorderColors } from '../../constants';
import { useClassNamePrefix } from '../../hooks';
import { SpiritBoxProps } from '../../types';

interface BoxCSSProperties extends CSSProperties {
  [key: string]: string | undefined | number;
}

export interface UseBoxStyleProps<T> {
  /** className props */
  classProps: string;
  /** Props for the box element. */
  props: T;
  /** Style props for the box element */
  styleProps: BoxCSSProperties;
}

export const useBoxStyleProps = (
  props: Partial<SpiritBoxProps<ElementType>>,
): UseBoxStyleProps<Partial<SpiritBoxProps<ElementType>>> => {
  const {
    backgroundColor,
    borderColor,
    borderRadius,
    borderWidth,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingX,
    paddingY,
    ...restProps
  } = props || {};
  const boxClass = useClassNamePrefix('Box');

  const boxStyle: BoxCSSProperties = {};

  const boxBackgroundColor = backgroundColor ? `bg-${backgroundColor}` : '';
  let boxBorderColor = borderColor ? borderColor.replace('', 'border-') : '';
  let boxBorderRadius = '';
  const boxBorderWidth = borderWidth ? borderWidth.replace('', 'border-') : '';
  const boxPadding = padding ? padding.replace('space-', 'p-') : '';
  const boxPaddingBottom = paddingBottom ? paddingBottom.replace('space-', 'pb-') : '';
  const boxPaddingLeft = paddingLeft ? paddingLeft.replace('space-', 'pl-') : '';
  const boxPaddingRight = paddingRight ? paddingRight.replace('space-', 'pr-') : '';
  const boxPaddingTop = paddingTop ? paddingTop.replace('space-', 'pt-') : '';
  const boxPaddingX = paddingX ? paddingX.replace('space-', 'px-') : '';
  const boxPaddingY = paddingY ? paddingY.replace('space-', 'py-') : '';

  if (borderWidth && parseInt(borderWidth, 10) > 0) {
    boxStyle.borderStyle = 'solid';
    boxBorderRadius = borderRadius ? borderRadius.replace('', 'rounded-') : '';
    if (!borderColor) {
      boxBorderColor = `border-${BorderColors.BASIC}`;
    }
  }

  const boxClasses = classNames(boxClass, {
    [boxBackgroundColor]: backgroundColor,
    [boxBorderColor]: boxBorderColor,
    [boxBorderRadius]: boxBorderRadius,
    [boxBorderWidth]: borderWidth,
    [boxPadding]: padding,
    [boxPaddingBottom]: paddingBottom,
    [boxPaddingLeft]: paddingLeft,
    [boxPaddingRight]: paddingRight,
    [boxPaddingTop]: paddingTop,
    [boxPaddingX]: paddingX,
    [boxPaddingY]: paddingY,
  });

  return {
    classProps: boxClasses,
    props: restProps,
    styleProps: boxStyle,
  };
};
