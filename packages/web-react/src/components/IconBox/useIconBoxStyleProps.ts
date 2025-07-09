import { borderWidth100, cssVariablePrefix } from '@lmc-eu/spirit-design-tokens';
import { CSSProperties, ElementType } from 'react';
import { BorderRadii } from '../../constants';
import type { BorderRadiiDictionaryType, SpiritIconBoxProps } from '../../types';

const sizeMap = {
  xsmall: { padding: 'space-500', iconSize: 16 },
  small: { padding: 'space-500', iconSize: 20 },
  medium: { padding: 'space-600', iconSize: 24 },
  large: { padding: 'space-600', iconSize: 28 },
  xlarge: { padding: 'space-700', iconSize: 28 },
} as const;

const borderRadiusMap = {
  circle: BorderRadii.FULL,
  rounded: BorderRadii['300'],
  square: BorderRadii['0'],
} as const;

export interface UseIconBoxStyleProps<T> {
  iconBoxStyles: CSSProperties;
  props: T;
  borderRadiusProps: BorderRadiiDictionaryType;
  sizeProps: (typeof sizeMap)[keyof typeof sizeMap];
}

export const useIconBoxStyleProps = (
  props: Partial<SpiritIconBoxProps<ElementType>>,
): UseIconBoxStyleProps<Partial<SpiritIconBoxProps<ElementType>>> => {
  const { shape = 'rounded', hasBorder = true, size = 'medium', ...restProps } = props || {};
  const sizeProps = sizeMap[size];
  const borderRadiusProps = borderRadiusMap[shape];
  const iconBoxStyles: CSSProperties = {};

  if (!hasBorder) {
    iconBoxStyles.padding = `calc(var(--${cssVariablePrefix}${sizeProps.padding}) + ${borderWidth100})`;
  }

  return {
    iconBoxStyles,
    props: restProps,
    borderRadiusProps,
    sizeProps,
  };
};
