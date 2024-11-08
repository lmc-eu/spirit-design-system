'use client';

import classNames from 'classnames';
import React, { ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritGridItemProps } from '../../types';
import { useGridItemStyleProps } from './useGridItemStyleProps';

const GridItem = <T extends ElementType = 'div'>(props: SpiritGridItemProps<T>): JSX.Element => {
  const { elementType: ElementTag = 'div', children, ...restProps } = props;
  const { classProps, styleProps: gridItemStyle, props: modifiedProps } = useGridItemStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  const gridItemStyleProps = {
    style: {
      ...styleProps.style,
      ...gridItemStyle,
    },
  };

  return (
    <ElementTag {...otherProps} {...gridItemStyleProps} className={classNames(classProps, styleProps.className)}>
      {children}
    </ElementTag>
  );
};

export default GridItem;
