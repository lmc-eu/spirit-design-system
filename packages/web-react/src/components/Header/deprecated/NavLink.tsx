import classNames from 'classnames';
import React from 'react';
import { useHeader } from './useHeader';
import { ChildrenProps } from '../../../types';
import { useStyleProps } from '../../../hooks/styleProps';

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
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  const classProps = classNames(navLinkClass, { [navLinkCurrentClass]: isCurrent }, styleProps.className);

  return (
    <a href={href} {...otherProps} {...styleProps} className={classProps}>
      {children}
    </a>
  );
};

NavLink.defaultProps = defaultProps;

export default NavLink;
