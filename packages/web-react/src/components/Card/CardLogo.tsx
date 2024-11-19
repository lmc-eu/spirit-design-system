'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritCardLogoProps } from '../../types';
import { useCardStyleProps } from './useCardStyleProps';

const CardLogo = (props: SpiritCardLogoProps) => {
  const { children, ...restProps } = props;
  const { classProps } = useCardStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <div {...otherProps} className={classNames(classProps.logo, styleProps.className)} style={{ ...styleProps.style }}>
      {children}
    </div>
  );
};

export default CardLogo;
