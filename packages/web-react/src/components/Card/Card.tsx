'use client';

import classNames from 'classnames';
import React, { ElementType } from 'react';
import { Direction } from '../../constants';
import { useStyleProps } from '../../hooks';
import { SpiritCardProps } from '../../types';
import { useCardStyleProps } from './useCardStyleProps';

const defaultProps: Partial<SpiritCardProps> = {
  direction: Direction.VERTICAL,
  elementType: 'article',
  isBoxed: false,
};

const Card = <T extends ElementType = 'article'>(props: SpiritCardProps<T>) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType: ElementTag = 'article', direction, isBoxed, children, ...restProps } = propsWithDefaults;
  const { classProps } = useCardStyleProps({ direction, isBoxed });
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <ElementTag {...otherProps} className={classNames(classProps.root, styleProps.className)} style={styleProps.style}>
      {children}
    </ElementTag>
  );
};

export default Card;
