'use client';

import React, { forwardRef, type ElementType } from 'react';
import { AlignmentXExtended, AlignmentYExtended } from '../../constants';
import { useStyleProps } from '../../hooks';
import { type GridProps, type PolymorphicRef } from '../../types';
import { mergeStyleProps } from '../../utils';
import { useGridStyleProps } from './useGridStyleProps';

const defaultProps = {
  alignmentX: AlignmentXExtended.STRETCH,
  alignmentY: AlignmentYExtended.STRETCH,
  elementType: 'div' as const,
};

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['GridInner'] }] */
const GridInner = <T extends ElementType = 'div'>(
  props: GridProps<T>,
  ref: PolymorphicRef<T>,
): JSX.Element => {
  const propsWithDefaults = { ...defaultProps, ...props };

  const { elementType = defaultProps.elementType, children, ...restProps } = propsWithDefaults;
  const Component = elementType as React.ElementType;

  const { classProps, props: modifiedProps, styleProps: gridStyle } = useGridStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);
  const mergedStyleProps = mergeStyleProps(Component, { classProps, styleProps, otherProps, gridStyle });

  return (
    <Component {...otherProps} {...mergedStyleProps} ref={ref}>
      {children}
    </Component>
  );
};

const Grid = forwardRef(GridInner) as <T extends ElementType = 'div'>(
  props: GridProps<T> & { ref?: PolymorphicRef<T> }
) => React.ReactElement;

Grid.spiritComponent = 'Grid';
Grid.spiritDefaultElement = 'div' as const;
Grid.spiritDefaultProps = null as unknown as GridProps<'div'>;
Grid.displayName = 'Grid';

export default Grid;
