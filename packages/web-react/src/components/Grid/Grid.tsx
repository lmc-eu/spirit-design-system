'use client';

import React, { type ElementType } from 'react';
import { AlignmentXExtended, AlignmentYExtended } from '../../constants';
import { useStyleProps } from '../../hooks';
import { type SpiritGridProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { useGridStyleProps } from './useGridStyleProps';

const defaultProps: Partial<SpiritGridProps> = {
  alignmentX: AlignmentXExtended.STRETCH,
  alignmentY: AlignmentYExtended.STRETCH,
  elementType: 'div',
};

const Grid = <T extends ElementType = 'div'>(props: SpiritGridProps<T>): JSX.Element => {
  const propsWithDefaults = { ...defaultProps, ...props };

  const { elementType: ElementTag = 'div', children, ...restProps } = propsWithDefaults;
  const { classProps, props: modifiedProps, styleProps: gridStyle } = useGridStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);
  const mergedStyleProps = mergeStyleProps(ElementTag, { classProps, styleProps, otherProps, gridStyle });

  return (
    <ElementTag {...otherProps} {...mergedStyleProps}>
      {children}
    </ElementTag>
  );
};

Grid.spiritComponent = 'Grid';

export default Grid;
