'use client';

import React from 'react';
import { ModalCloseButtonProps } from '../../types';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { VisuallyHidden } from '../VisuallyHidden';

const ModalCloseButton = ({ label = 'Close', onClose, id, isOpen, ...restProps }: ModalCloseButtonProps) => (
  <Button {...restProps} isSymmetrical color="tertiary" onClick={onClose} aria-expanded={isOpen} aria-controls={id}>
    <Icon name="close" />
    <VisuallyHidden>{label}</VisuallyHidden>
  </Button>
);

export default ModalCloseButton;
