'use client';

import React, { ElementType } from 'react';
import { DirectionExtended } from '../../constants';
import { useStyleProps } from '../../hooks';
import { SpiritCardProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { useCardStyleProps } from './useCardStyleProps';

const defaultProps: Partial<SpiritCardProps> = {
  direction: DirectionExtended.VERTICAL,
  elementType: 'article',
  isBoxed: false,
};

const Card = <T extends ElementType = 'article'>(props: SpiritCardProps<T>) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType: ElementTag = 'article', direction, isBoxed, children, ...restProps } = propsWithDefaults;
  const { classProps } = useCardStyleProps({ direction, isBoxed });
  const { styleProps, props: otherProps } = useStyleProps(restProps);
  const mergedStyleProps = mergeStyleProps(ElementTag, { classProps: classProps.root, styleProps, otherProps });

  return (
    <ElementTag {...otherProps} {...mergedStyleProps}>
      {children}
    </ElementTag>
  );
};

Card.spiritComponent = 'Card';

export default Card;
