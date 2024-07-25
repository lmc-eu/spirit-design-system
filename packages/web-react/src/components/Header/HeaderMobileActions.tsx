'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { HeaderMobileActionsProps } from '../../types';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { VisuallyHidden } from '../VisuallyHidden';
import { HEADER_MENU_TOGGLE_LABEL_DEFAULT } from './constants';
import { useHeaderStyleProps } from './useHeaderStyleProps';

const HeaderMobileActions = (props: HeaderMobileActionsProps) => {
  const {
    children,
    dialogId,
    menuToggleLabel = HEADER_MENU_TOGGLE_LABEL_DEFAULT,
    isOpen,
    onOpen,
    ...restProps
  } = props;

  const { classProps } = useHeaderStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <div
      {...otherProps}
      className={classNames(classProps.headerMobileActions, styleProps.className)}
      style={styleProps.style}
    >
      {children}
      <Button aria-controls={dialogId} aria-expanded={isOpen} color="inverted" onClick={onOpen} isSquare>
        <Icon name="hamburger" />
        <VisuallyHidden>{menuToggleLabel}</VisuallyHidden>
      </Button>
    </div>
  );
};

export default HeaderMobileActions;
