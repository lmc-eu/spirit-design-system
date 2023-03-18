import classNames from 'classnames';
import React from 'react';
import { ChildrenProps } from '../../../types';
import HeaderBackdrop from './HeaderBackdrop';
import { useHeader } from './useHeader';
import { useStyleProps } from '../../../hooks/styleProps';

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
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  const classProps = classNames(navbarClass, { 'is-open': isExpanded }, styleProps.className);

  return (
    <nav {...otherProps} {...styleProps} id={id} className={classProps}>
      <div className={navbarContentClass}>{children}</div>
      <HeaderBackdrop />
    </nav>
  );
};

Navbar.defaultProps = defaultProps;

export default Navbar;
