import React from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { HeaderNavItemProps } from '../../types';
import { useHeaderModernStyleProps } from './useHeaderStyleProps';

const HeaderNavItem = (props: HeaderNavItemProps) => {
  const { ...restProps } = props;

  const { classProps } = useHeaderModernStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <li
      className={classNames(classProps.headerNavItem, styleProps.className)}
      style={styleProps.style}
      {...otherProps}
    />
  );
};

export default HeaderNavItem;
