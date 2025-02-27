'use client';

import React, { ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritGridItemProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { useGridItemStyleProps } from './useGridItemStyleProps';

const GridItem = <T extends ElementType = 'div'>(props: SpiritGridItemProps<T>): JSX.Element => {
  const { elementType: ElementTag = 'div', children, ...restProps } = props;
  const { classProps, styleProps: gridItemStyle, props: modifiedProps } = useGridItemStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);
  const mergedStyleProps = mergeStyleProps(ElementTag, { classProps, styleProps, otherProps, gridItemStyle });

  return (
    <ElementTag {...otherProps} {...mergedStyleProps}>
      {children}
    </ElementTag>
  );
};

GridItem.spiritComponent = 'GridItem';

export default GridItem;
