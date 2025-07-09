import { borderWidth100, cssVariablePrefix } from '@lmc-eu/spirit-design-tokens';
import { CSSProperties, ElementType } from 'react';
import { SizesExtended } from '../../constants';
import type { SpiritIconBoxProps } from '../../types';
import { IconBoxSizeMap, IconBoxShapesMap, IconBoxShapes } from './constants';

export interface UseIconBoxStyleProps<T> {
  iconBoxStyles: CSSProperties;
  props: T;
  shapesProps: (typeof IconBoxShapesMap)[keyof typeof IconBoxShapesMap];
  sizeProps: (typeof IconBoxSizeMap)[keyof typeof IconBoxSizeMap];
}

export const useIconBoxStyleProps = (
  props: Partial<SpiritIconBoxProps<ElementType>>,
): UseIconBoxStyleProps<Partial<SpiritIconBoxProps<ElementType>>> => {
  const { shape = IconBoxShapes.ROUNDED, hasBorder = true, size = SizesExtended.MEDIUM, ...restProps } = props || {};
  const sizeProps = IconBoxSizeMap[size];
  const shapesProps = IconBoxShapesMap[shape];
  const iconBoxStyles: CSSProperties = {};

  if (!hasBorder) {
    iconBoxStyles.padding = `calc(var(--${cssVariablePrefix}${sizeProps.padding}) + ${borderWidth100})`;
  }

  return {
    iconBoxStyles,
    props: restProps,
    shapesProps,
    sizeProps,
  };
};
