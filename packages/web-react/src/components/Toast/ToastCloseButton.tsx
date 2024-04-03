import React from 'react';
import { ToastCloseButtonProps } from '../../types';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { VisuallyHidden } from '../VisuallyHidden';

const ToastCloseButton = ({ color, onClose, isOpen, id, closeLabel, isDismissible }: ToastCloseButtonProps) => {
  if (isDismissible && onClose) {
    return (
      <Button
        type="button"
        color={color}
        onClick={onClose}
        size="small"
        isSquare
        aria-expanded={isOpen}
        aria-controls={id}
      >
        <Icon name="close" />
        <VisuallyHidden>{closeLabel}</VisuallyHidden>
      </Button>
    );
  }

  return null;
};

export default ToastCloseButton;
