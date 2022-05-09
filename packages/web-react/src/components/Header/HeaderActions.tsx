import classNames from 'classnames';
import React from 'react';
import { ChildrenProps, ColorProps } from '../../types';
import { filterProps } from '../../utils/filterProps';
import { useHeader } from './useHeader';

export interface NavbarActions extends ChildrenProps, ColorProps {}

const NavbarActions = (props: NavbarActions): JSX.Element => {
  const { headerClass } = useHeader();
  const { color, children, ...restProps } = props;

  const navbarActionsClass = `${headerClass}__actions`;
  const navbarActionsColorClass = `${navbarActionsClass}--${color}`;
  const classProps = classNames(navbarActionsClass, { [navbarActionsColorClass]: color });

  return (
    <div {...filterProps(restProps)} className={classProps}>
      {children}
    </div>
  );
};

export default NavbarActions;
