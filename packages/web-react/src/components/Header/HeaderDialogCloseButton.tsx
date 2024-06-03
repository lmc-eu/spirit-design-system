import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { ClickEvent, HeaderDialogCloseButtonProps } from '../../types';
import { Icon } from '../Icon';
import { VisuallyHidden } from '../VisuallyHidden';
import { HEADER_DIALOG_CLOSE_BUTTON_LABEL_DEFAULT } from './constants';
import { useHeaderDialogContext } from './HeaderDialogContext';
import { useHeaderStyleProps } from './useHeaderStyleProps';

const HeaderDialogCloseButton = (props: HeaderDialogCloseButtonProps) => {
  const { label = HEADER_DIALOG_CLOSE_BUTTON_LABEL_DEFAULT, onClick, ...restProps } = props;

  const { classProps } = useHeaderStyleProps();
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
      <VisuallyHidden>{label}</VisuallyHidden>
    </button>
  );
};

export default HeaderDialogCloseButton;
