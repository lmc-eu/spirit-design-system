import React from 'react';
import { ModalCloseButtonProps } from '../../types';
import { Icon } from '../Icon';
import { VisuallyHidden } from '../VisuallyHidden';
import { Button } from '../Button';

const ModalCloseButton = ({ label = 'Close', onClose, id, isOpen, ...restProps }: ModalCloseButtonProps) => (
  <Button {...restProps} isSquare color="tertiary" onClick={onClose} aria-expanded={isOpen} aria-controls={id}>
    <Icon name="close" />
    <VisuallyHidden>{label}</VisuallyHidden>
  </Button>
);

export default ModalCloseButton;
