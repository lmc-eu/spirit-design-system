import React from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { HeaderMobileActionsProps } from '../../types';
import { HEADER_MENU_TOGGLE_LABEL_DEFAULT } from './const';
import { useHeaderModernStyleProps } from './useHeaderStyleProps';
import { Button } from '../Button';
import { Icon } from '../Icon';

const HeaderMobileActions = (props: HeaderMobileActionsProps) => {
  const {
    children,
    dialogId,
    menuToggleLabel = HEADER_MENU_TOGGLE_LABEL_DEFAULT,
    isOpen,
    onOpen,
    ...restProps
  } = props;

  const { classProps } = useHeaderModernStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <div
      className={classNames(classProps.headerMobileActions, styleProps.className)}
      style={styleProps.style}
      {...otherProps}
    >
      {children}
      <Button aria-controls={dialogId} aria-expanded={isOpen} color="inverted" onClick={onOpen} isSquare>
        <Icon name="hamburger" />
        <span className="accessibility-hidden">{menuToggleLabel}</span>
      </Button>
    </div>
  );
};

export default HeaderMobileActions;
