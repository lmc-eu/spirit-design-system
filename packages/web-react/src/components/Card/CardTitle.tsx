'use client';

import classNames from 'classnames';
import React, { ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritCardTitleProps } from '../../types';
import { useCardStyleProps } from './useCardStyleProps';

const defaultProps: Partial<SpiritCardTitleProps> = {
  elementType: 'h4',
  isHeading: true,
};

const CardTitle = <T extends ElementType = 'h4'>(props: SpiritCardTitleProps<T>) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType: ElementTag = 'h4', children, isHeading, ...restProps } = propsWithDefaults;
  const { classProps } = useCardStyleProps({ isHeading });
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <ElementTag {...otherProps} className={classNames(classProps.title, styleProps.className)} style={styleProps.style}>
      {children}
    </ElementTag>
  );
};

export default CardTitle;
