'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { ToastCloseButtonProps } from '../../types';
import { Icon } from '../Icon';
import { VisuallyHidden } from '../VisuallyHidden';
import { useToastBarStyleProps } from './useToastBarStyleProps';

const ToastCloseButton = (props: ToastCloseButtonProps) => {
  const { onClose, isOpen, id, closeLabel, isDismissible, ...restProps } = props;
  const { classProps, props: modifiedProps } = useToastBarStyleProps({ ...restProps });
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  if (isDismissible && onClose) {
    return (
      <button
        {...otherProps}
        {...styleProps}
        type="button"
        className={classNames(classProps.close, styleProps.className)}
        onClick={onClose}
        aria-expanded={isOpen}
        aria-controls={id}
      >
        <Icon name="close" />
        <VisuallyHidden>{closeLabel}</VisuallyHidden>
      </button>
    );
  }

  return null;
};

export default ToastCloseButton;
