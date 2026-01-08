'use client';

import React from 'react';
import { type ModalCloseButtonProps } from '../../types';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { VisuallyHidden } from '../VisuallyHidden';
import { MODAL_CLOSE_BUTTON_LABEL_DEFAULT } from './constants';

const ModalCloseButton = ({
  label = MODAL_CLOSE_BUTTON_LABEL_DEFAULT,
  onClose,
  id,
  isOpen,
  ...restProps
}: ModalCloseButtonProps) => (
  <Button {...restProps} isSymmetrical color="tertiary" onClick={onClose} aria-expanded={isOpen} aria-controls={id}>
    <Icon name="close" />
    <VisuallyHidden>{label}</VisuallyHidden>
  </Button>
);

ModalCloseButton.spiritComponent = 'ModalCloseButton';

export default ModalCloseButton;
