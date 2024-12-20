import classNames from 'classnames';
import { CSSProperties, ElementType } from 'react';
import { BorderColors } from '../../constants';
import { BreakpointToken, SpaceToken, SpiritBoxProps } from '../../types';

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

export const generateResponsiveUtilityClasses = (
  prefix: string,
  propValue: SpaceToken | Partial<Record<BreakpointToken, SpaceToken>> | undefined,
): string[] => {
  if (propValue && typeof propValue === 'object') {
    return Object.entries(propValue).map(([breakpoint, value]) => {
      const classValue = value?.replace('space-', '');

      return breakpoint === 'mobile' ? `${prefix}-${classValue}` : `${prefix}-${breakpoint}-${classValue}`;
    });
  }

  if (propValue && typeof propValue !== 'object') {
    return [`${prefix}-${propValue.replace('space-', '')}`];
  }

  return [];
};

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
  const boxStyle: BoxCSSProperties = {};

  const boxBackgroundColor = backgroundColor ? `bg-${backgroundColor}` : '';
  let boxBorderColor = borderColor ? borderColor.replace('', 'border-') : '';
  let boxBorderRadius = '';
  const boxBorderWidth = borderWidth ? borderWidth.replace('', 'border-') : '';

  if (borderWidth && parseInt(borderWidth, 10) > 0) {
    boxStyle.borderStyle = 'solid';
    boxBorderRadius = borderRadius ? borderRadius.replace('', 'rounded-') : '';
    if (!borderColor) {
      boxBorderColor = `border-${BorderColors.BASIC}`;
    }
  }

  const paddingClasses = [
    ...generateResponsiveUtilityClasses('p', padding),
    ...generateResponsiveUtilityClasses('pb', paddingBottom),
    ...generateResponsiveUtilityClasses('pl', paddingLeft),
    ...generateResponsiveUtilityClasses('pr', paddingRight),
    ...generateResponsiveUtilityClasses('pt', paddingTop),
    ...generateResponsiveUtilityClasses('px', paddingX),
    ...generateResponsiveUtilityClasses('py', paddingY),
  ];

  const boxClasses = classNames(boxBackgroundColor, boxBorderColor, boxBorderRadius, boxBorderWidth, ...paddingClasses);

  return {
    classProps: boxClasses,
    props: restProps,
    styleProps: boxStyle,
  };
};
