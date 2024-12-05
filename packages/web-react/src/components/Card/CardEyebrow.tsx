'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritCardEyebrowProps } from '../../types';
import { useCardStyleProps } from './useCardStyleProps';

const CardEyebrow = (props: SpiritCardEyebrowProps) => {
  const { children, ...restProps } = props;
  const { classProps } = useCardStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <div {...otherProps} className={classNames(classProps.eyebrow, styleProps.className)} style={styleProps.style}>
      {children}
    </div>
  );
};

export default CardEyebrow;
