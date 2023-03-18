import classNames from 'classnames';
import React from 'react';
import { ChildrenProps } from '../../../types';
import { useHeader } from './useHeader';
import { useStyleProps } from '../../../hooks/styleProps';

export type NavItemProps = ChildrenProps;

const NavItem = ({ children, ...restProps }: NavItemProps): JSX.Element => {
  const { headerClass } = useHeader();
  const navItemClass = `${headerClass}__navItem`;
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <li {...otherProps} {...styleProps} className={classNames(navItemClass, styleProps.className)}>
      {children}
    </li>
  );
};

export default NavItem;
