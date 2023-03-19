import React from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { ClickEvent, HeaderDialogCloseButtonProps } from '../../types';
import { HEADER_DIALOG_CLOSE_BUTTON_LABEL_DEFAULT } from './constants';
import { useHeaderModernStyleProps } from './useHeaderStyleProps';
import { useHeaderDialogContext } from './HeaderDialogContext';
import { Icon } from '../Icon';

const HeaderDialogCloseButton = (props: HeaderDialogCloseButtonProps) => {
  const { label = HEADER_DIALOG_CLOSE_BUTTON_LABEL_DEFAULT, onClick, ...restProps } = props;

  const { classProps } = useHeaderModernStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(restProps);
  const { id, isOpen, onClose } = useHeaderDialogContext();

  const clickHandler = (event: ClickEvent) => {
    onClose(event);
    if (onClick) onClick(event);
  };

  return (
    <button
      {...otherProps}
      type="button"
      aria-expanded={isOpen}
      aria-controls={id}
      onClick={clickHandler}
      className={classNames(classProps.headerDialogCloseButton, styleProps.className)}
      style={styleProps.style}
    >
      <Icon name="close" />
      <span className="accessibility-hidden">{label}</span>
    </button>
  );
};

export default HeaderDialogCloseButton;
