import classNames from 'classnames';
import React from 'react';
import { ChildrenProps } from '../../types';
import { filterProps } from '../../utils/filterProps';
import HeaderBackdrop from './HeaderBackdrop';
import { useHeader } from './useHeader';

export type NavbarVariant = 'bar' | 'dialog';
export interface NavbarProps extends ChildrenProps {
  variant?: NavbarVariant;
}

const defaultProps = {
  variant: 'bar',
};

const Navbar = ({ variant, children, ...restProps }: NavbarProps): JSX.Element => {
  const { headerClass, id, isExpanded } = useHeader();
  const navbarClass = `${headerClass}__${variant}`;
  const navbarContentClass = `${headerClass}__content`;

  const classProps = classNames(navbarClass, { 'is-open': isExpanded });

  return (
    <nav {...filterProps(restProps)} id={id} className={classProps}>
      <div className={navbarContentClass}>{children}</div>
      <HeaderBackdrop />
    </nav>
  );
};

Navbar.defaultProps = defaultProps;

export default Navbar;
