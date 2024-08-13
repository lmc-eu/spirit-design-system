'use client';

import classNames from 'classnames';
import React, { ElementType } from 'react';
import { AlignmentXExtended, AlignmentYExtended } from '../../constants';
import { useStyleProps } from '../../hooks';
import { SpiritGridProps } from '../../types';
import { useGridStyleProps } from './useGridStyleProps';

const defaultProps: Partial<SpiritGridProps> = {
  alignmentX: AlignmentXExtended.STRETCH,
  alignmentY: AlignmentYExtended.STRETCH,
  elementType: 'div',
};

export const Grid = <T extends ElementType = 'div'>(props: SpiritGridProps<T>): JSX.Element => {
  const propsWithDefaults = { ...defaultProps, ...props };

  const { elementType: ElementTag = 'div', children, ...restProps } = propsWithDefaults;
  const { classProps, props: modifiedProps, styleProps: gridStyle } = useGridStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  const gridStyleProps = {
    style: {
      ...styleProps.style,
      ...gridStyle,
    },
  };

  return (
    <ElementTag {...otherProps} {...gridStyleProps} className={classNames(classProps, styleProps.className)}>
      {children}
    </ElementTag>
  );
};

export default Grid;
