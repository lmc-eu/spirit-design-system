import React from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { HeaderNavItemProps } from '../../types';
import { useHeaderModernStyleProps } from './useHeaderStyleProps';

const HeaderNavItem = (props: HeaderNavItemProps) => {
  const { classProps } = useHeaderModernStyleProps();
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
