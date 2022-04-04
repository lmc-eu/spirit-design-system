import React from 'react';
import { filterProps } from '../../utils/filterProps';
import { useHeader } from './useHeader';
import { ChildrenProps } from '../../types';

export interface NavbarProps extends ChildrenProps {
  variant: 'bar' | 'dialog';
}

const Navbar = ({ variant, children, ...restProps }: NavbarProps): JSX.Element => {
  const { headerClass, id } = useHeader();
  const navbarClass = `${headerClass}__${variant}`;
  const navbarContentClass = `${headerClass}__content`;

  return (
    <nav {...filterProps(restProps)} id={id} className={navbarClass}>
      <div className={navbarContentClass}>{children}</div>
    </nav>
  );
};

export default Navbar;
