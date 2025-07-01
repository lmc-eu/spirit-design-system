import { borderWidth100, cssVariablePrefix } from '@lmc-eu/spirit-design-tokens';
import { CSSProperties, ElementType } from 'react';
import { SizesExtended } from '../../constants';
import type { SpiritIconBoxProps } from '../../types';
import { IconBoxSizes, IconBoxShapesRadii, IconBoxShapes } from './constants';

export interface UseIconBoxStyleProps<T> {
  iconBoxStyles: CSSProperties;
  props: T;
  shapesProps: (typeof IconBoxShapesRadii)[keyof typeof IconBoxShapesRadii];
  sizeProps: (typeof IconBoxSizes)[keyof typeof IconBoxSizes];
}

export const useIconBoxStyleProps = (
  props: Partial<SpiritIconBoxProps<ElementType>>,
): UseIconBoxStyleProps<Partial<SpiritIconBoxProps<ElementType>>> => {
  const { shape = IconBoxShapes.ROUNDED, hasBorder = true, size = SizesExtended.MEDIUM, ...restProps } = props || {};
  const sizeProps = IconBoxSizes[size];
  const shapesProps = IconBoxShapesRadii[shape];
  const iconBoxStyles: CSSProperties = {};

  if (hasBorder) {
    iconBoxStyles.padding = `calc(var(--${cssVariablePrefix}${sizeProps.padding}) - ${borderWidth100})`;
  }

  return {
    iconBoxStyles,
    props: restProps,
    shapesProps,
    sizeProps,
  };
};
