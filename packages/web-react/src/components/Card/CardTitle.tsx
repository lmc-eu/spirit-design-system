'use client';

import React, { ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritCardTitleProps } from '../../types';
import { mergeStyleProps } from '../../utils';
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
  const mergedStyleProps = mergeStyleProps(ElementTag, { classProps: classProps.title, styleProps, otherProps });

  return (
    <ElementTag {...otherProps} {...mergedStyleProps}>
      {children}
    </ElementTag>
  );
};

CardTitle.spiritComponent = 'CardTitle';

export default CardTitle;
