'use client';

import React from 'react';
import { DrawerCloseButtonProps } from '../../types';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { VisuallyHidden } from '../VisuallyHidden';
import { useDrawerContext } from './DrawerContext';

const DrawerCloseButton = ({ label = 'Close', ...restProps }) => {
  const { id, isOpen, onClose } = useDrawerContext();

  return (
    <Button {...restProps} isSymmetrical color="tertiary" onClick={onClose} aria-expanded={isOpen} aria-controls={id}>
      <Icon name="close" />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Button>
  );
};

export default DrawerCloseButton;
