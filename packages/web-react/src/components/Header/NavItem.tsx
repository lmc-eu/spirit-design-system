import React from 'react';
import { ChildrenProps } from '../../types';
import { filterProps } from '../../utils/filterProps';
import { useHeader } from './useHeader';

export type NavItemProps = ChildrenProps;

const NavItem = ({ children, ...restProps }: NavItemProps): JSX.Element => {
  const { headerClass } = useHeader();
  const navItemClass = `${headerClass}__navItem`;

  return (
    <li {...filterProps(restProps)} className={navItemClass}>
      {children}
    </li>
  );
};

export default NavItem;
