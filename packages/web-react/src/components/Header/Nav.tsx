import classNames from 'classnames';
import React from 'react';
import { ChildrenProps } from '../../types';
import { useHeader } from './useHeader';
import { useStyleProps } from '../../hooks/styleProps';

export type NavProps = ChildrenProps;

const Nav = ({ children, ...restProps }: NavProps): JSX.Element => {
  const { headerClass } = useHeader();
  const navClass = `${headerClass}__nav`;
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <ul {...otherProps} {...styleProps} className={classNames(navClass, styleProps.className)}>
      {children}
    </ul>
  );
};

export default Nav;
