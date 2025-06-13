'use client';

import React, { ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritMatrixProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import {
  DEFAULT_MATRIX_COLS,
  DEFAULT_MATRIX_ITEM_ROWS,
  DEFAULT_MATRIX_ROWS,
  DEFAULT_MATRIX_SPACING_X,
  DEFAULT_MATRIX_SPACING_Y,
} from './constant';
import { useMatrixStyleProps } from './useMatrixStyleProps';

const defaultProps: Partial<SpiritMatrixProps> = {
  cols: DEFAULT_MATRIX_COLS,
  elementType: 'div',
  itemRows: DEFAULT_MATRIX_ITEM_ROWS,
  rows: DEFAULT_MATRIX_ROWS,
  spacingX: DEFAULT_MATRIX_SPACING_X,
  spacingY: DEFAULT_MATRIX_SPACING_Y,
};

const Matrix = <T extends ElementType = 'div'>(props: SpiritMatrixProps<T>) => {
  const propsWithDefaults = { ...defaultProps, ...props };

  const { elementType: ElementTag = 'div', children, ...restProps } = propsWithDefaults;
  const { classProps, props: modifiedProps, styleProps: matrixStyleProps } = useMatrixStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);
  const mergedStyleProps = mergeStyleProps(ElementTag, { classProps, styleProps, otherProps, matrixStyleProps });

  return (
    <ElementTag {...otherProps} {...mergedStyleProps}>
      {children}
    </ElementTag>
  );
};

Matrix.spiritComponent = 'Matrix';

export default Matrix;
