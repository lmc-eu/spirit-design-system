import classNames from 'classnames';
import React from 'react';
import { ChildrenProps, ColorProps } from '../../types';
import { useHeader } from './useHeader';
import { useStyleProps } from '../../hooks/styleProps';

export interface NavbarActions extends ChildrenProps, ColorProps {}

const NavbarActions = (props: NavbarActions): JSX.Element => {
  const { headerClass } = useHeader();
  const { color, children, ...restProps } = props;
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  const navbarActionsClass = `${headerClass}__actions`;
  const navbarActionsColorClass = `${navbarActionsClass}--${color}`;
  const classProps = classNames(navbarActionsClass, { [navbarActionsColorClass]: color }, styleProps.className);

  return (
    <div {...otherProps} {...styleProps} className={classProps}>
      {children}
    </div>
  );
};

export default NavbarActions;
