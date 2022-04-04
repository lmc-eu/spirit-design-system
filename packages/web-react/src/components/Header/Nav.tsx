import React from 'react';
import { ChildrenProps } from '../../types';
import { filterProps } from '../../utils/filterProps';
import { useHeader } from './useHeader';

export type NavProps = ChildrenProps;

const Nav = ({ children, ...restProps }: NavProps): JSX.Element => {
  const { headerClass } = useHeader();
  const navClass = `${headerClass}__nav`;

  return (
    <ul {...filterProps(restProps)} className={navClass}>
      {children}
    </ul>
  );
};

export default Nav;
