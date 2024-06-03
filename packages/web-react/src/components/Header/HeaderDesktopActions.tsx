import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { HeaderDesktopActionsProps } from '../../types';
import { useHeaderStyleProps } from './useHeaderStyleProps';

const defaultProps = {
  isAtEnd: false,
};

const HeaderDesktopActions = (props: HeaderDesktopActionsProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { isAtEnd, ...restProps } = propsWithDefaults;

  const { classProps } = useHeaderStyleProps({ hasActionsAtEnd: isAtEnd });
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <nav
      {...otherProps}
      className={classNames(classProps.headerDesktopActions, styleProps.className)}
      style={styleProps.style}
    />
  );
};

export default HeaderDesktopActions;
