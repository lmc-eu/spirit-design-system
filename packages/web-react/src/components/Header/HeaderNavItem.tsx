'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { HeaderNavItemProps } from '../../types';
import { useHeaderStyleProps } from './useHeaderStyleProps';

const HeaderNavItem = (props: HeaderNavItemProps) => {
  const { classProps } = useHeaderStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(props);

  return (
    <li
      {...otherProps}
      className={classNames(classProps.headerNavItem, styleProps.className)}
      style={styleProps.style}
    />
  );
};

export default HeaderNavItem;
