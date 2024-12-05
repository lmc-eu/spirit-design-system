'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { CardSizes, SpiritCardMediaProps } from '../../types';
import { useCardStyleProps } from './useCardStyleProps';

const defaultProps: Partial<SpiritCardMediaProps> = {
  hasFilledHeight: false,
  isExpanded: false,
  size: CardSizes.AUTO,
};

const CardMedia = (props: SpiritCardMediaProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { children, size, isExpanded, hasFilledHeight, ...restProps } = propsWithDefaults;
  const { classProps } = useCardStyleProps({ size, isExpanded, hasFilledHeight });
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <div {...otherProps} className={classNames(classProps.media, styleProps.className)} style={styleProps.style}>
      <div className={classProps.mediaCanvas}>{children}</div>
    </div>
  );
};

export default CardMedia;
