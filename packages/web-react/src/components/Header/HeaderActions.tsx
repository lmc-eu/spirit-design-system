import classNames from 'classnames';
import React from 'react';
import { ChildrenProps, ColorProps } from '../../types';
import { useHeader } from './useHeader';

export interface NavbarActions extends ChildrenProps, ColorProps {}

const NavbarActions = (props: NavbarActions): JSX.Element => {
  const { headerClass } = useHeader();
  const { color, children } = props;

  const navbarActionsClass = `${headerClass}__actions`;
  const navbarActionsColorClass = `${navbarActionsClass}--${color}`;
  const classProps = classNames(navbarActionsClass, { [navbarActionsColorClass]: color });

  return <div className={classProps}>{children}</div>;
};

export default NavbarActions;
