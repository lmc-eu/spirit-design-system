import React from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { HeaderDesktopActionsProps } from '../../types';
import { useHeaderModernStyleProps } from './useHeaderStyleProps';
import { HEADER_ACTIONS_COLOR_DEFAULT } from './const';

const HeaderDesktopActions = (props: HeaderDesktopActionsProps) => {
  const { color = HEADER_ACTIONS_COLOR_DEFAULT, ...restProps } = props;

  const { classProps } = useHeaderModernStyleProps({ actionsColor: color });
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <nav
      className={classNames(classProps.headerDesktopActions, styleProps.className)}
      style={styleProps.style}
      {...otherProps}
    />
  );
};

export default HeaderDesktopActions;
