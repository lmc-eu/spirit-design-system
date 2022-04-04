import classNames from 'classnames';
import React from 'react';
import { useHeader } from './useHeader';
import { ChildrenProps } from '../../types';
import { filterProps } from '../../utils/filterProps';

export interface NavLinkProps extends ChildrenProps {
  href: string;
  isCurrent?: boolean;
}

const defaultProps = {
  isCurrent: false,
};

const NavLink = ({ href, isCurrent, children, ...restProps }: NavLinkProps): JSX.Element => {
  const { headerClass } = useHeader();
  const navLinkClass = `${headerClass}__link`;
  const navLinkCurrentClass = `${headerClass}__link--current`;

  const classProps = classNames(navLinkClass, { [navLinkCurrentClass]: isCurrent });

  return (
    <a href={href} {...filterProps(restProps)} className={classProps}>
      {children}
    </a>
  );
};

NavLink.defaultProps = defaultProps;

export default NavLink;
