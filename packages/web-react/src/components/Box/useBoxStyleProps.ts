import classNames from 'classnames';
import { CSSProperties, ElementType } from 'react';
import { DirectionAxis } from '../../constants';
import { useClassNamePrefix, useSpacingStyle } from '../../hooks';
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
    paddingX,
    paddingY,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    ...restProps
  } = props || {};
  const boxClass = useClassNamePrefix('Box');

  const boxStyle: BoxCSSProperties = {
    ...useSpacingStyle(padding, 'box', DirectionAxis.X),
    ...useSpacingStyle(padding, 'box', DirectionAxis.Y),
    ...useSpacingStyle(paddingX, 'box', DirectionAxis.X),
    ...useSpacingStyle(paddingY, 'box', DirectionAxis.Y),
  };

  const boxBackgroundColor = backgroundColor ? `bg-${backgroundColor}` : '';
  const boxPaddingBottom = paddingBottom ? paddingBottom.replace('space-', 'pb-') : '';
  const boxPaddingTop = paddingTop ? paddingTop.replace('space-', 'pt-') : '';
  const boxPaddingLeft = paddingLeft ? paddingLeft.replace('space-', 'pl-') : '';
  const boxPaddingRight = paddingRight ? paddingRight.replace('space-', 'pr-') : '';

  const boxClasses = classNames(boxClass, {
    [boxBackgroundColor]: backgroundColor,
    [boxPaddingBottom]: paddingBottom,
    [boxPaddingTop]: paddingTop,
    [boxPaddingLeft]: paddingLeft,
    [boxPaddingRight]: paddingRight,
  });

  return {
    classProps: boxClasses,
    props: restProps,
    styleProps: boxStyle,
  };
};
