'use client';

import React from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritNavigationItemProps } from '../../types';

const NavigationItem = (props: SpiritNavigationItemProps): JSX.Element => {
  const { children, ...restProps } = props;

  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <li {...otherProps} className={styleProps.className} style={styleProps.style}>
      {children}
    </li>
  );
};

export default NavigationItem;
