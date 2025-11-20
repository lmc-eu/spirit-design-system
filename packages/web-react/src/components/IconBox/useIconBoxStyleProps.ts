import { type ElementType } from 'react';
import { SizesExtended } from '../../constants';
import type { SpiritIconBoxProps } from '../../types';
import { IconBoxShapes, IconBoxShapesRadii, IconBoxSizes } from './constants';

export interface UseIconBoxStyleProps<T> {
  props: T;
  shapesProps: (typeof IconBoxShapesRadii)[keyof typeof IconBoxShapesRadii];
  sizeProps: (typeof IconBoxSizes)[keyof typeof IconBoxSizes];
}

export const useIconBoxStyleProps = (
  props: Partial<SpiritIconBoxProps<ElementType>>,
): UseIconBoxStyleProps<Partial<SpiritIconBoxProps<ElementType>>> => {
  const { shape = IconBoxShapes.ROUNDED, size = SizesExtended.MEDIUM, ...restProps } = props || {};
  const sizeProps = IconBoxSizes[size];
  const shapesProps = IconBoxShapesRadii[shape];

  return {
    props: restProps,
    shapesProps,
    sizeProps,
  };
};
