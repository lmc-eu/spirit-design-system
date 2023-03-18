import React from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { ClickEvent, HeaderDialogCloseButtonProps } from '../../types';
import { HEADER_DIALOG_CLOSE_BUTTON_LABEL_DEFAULT } from './const';
import { useHeaderModernStyleProps } from './useHeaderStyleProps';
import { useHeaderDialogContext } from './HeaderDialogContext';
import { Icon } from '../Icon';

const HeaderDialogCloseButton = (props: HeaderDialogCloseButtonProps) => {
  const { label = HEADER_DIALOG_CLOSE_BUTTON_LABEL_DEFAULT, onClick, ...restProps } = props;

  const { classProps } = useHeaderModernStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(restProps);
  const { id, open, onClose } = useHeaderDialogContext();

  const clickHandler = (event: ClickEvent) => {
    onClose(event);
    if (onClick) onClick(event);
  };

  return (
    <button
      type="button"
      aria-expanded={open}
      aria-controls={id}
      onClick={clickHandler}
      className={classNames(classProps.headerDialogCloseButton, styleProps.className)}
      style={styleProps.style}
      {...otherProps}
    >
      <Icon name="close" />
      <span className="accessibility-hidden">{label}</span>
    </button>
  );
};

export default HeaderDialogCloseButton;
