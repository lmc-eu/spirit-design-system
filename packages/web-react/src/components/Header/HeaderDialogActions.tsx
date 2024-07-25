'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { HeaderDialogActionsProps } from '../../types';
import { HEADER_ACTIONS_COLOR_DEFAULT } from './constants';
import { useHeaderStyleProps } from './useHeaderStyleProps';

const HeaderDialogActions = (props: HeaderDialogActionsProps) => {
  const { color = HEADER_ACTIONS_COLOR_DEFAULT, ...restProps } = props;

  const { classProps } = useHeaderStyleProps({ actionsColor: color });
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <nav
      {...otherProps}
      className={classNames(classProps.headerDialogActions, styleProps.className)}
      style={styleProps.style}
    />
  );
};

export default HeaderDialogActions;
