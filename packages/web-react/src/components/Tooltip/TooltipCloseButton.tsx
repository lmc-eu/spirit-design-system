'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { TooltipCloseButtonProps } from '../../types';
import { Icon } from '../Icon';
import { VisuallyHidden } from '../VisuallyHidden';
import { useTooltipStyleProps } from './useTooltipStyleProps';

const TooltipCloseButton = ({ label = 'Close', onClick, ...restProps }: TooltipCloseButtonProps) => {
  const { classProps, props: modifiedProps } = useTooltipStyleProps(restProps);
  const { styleProps } = useStyleProps({ ...modifiedProps });

  return (
    <button
      type="button"
      className={classNames(classProps.closeButtonClassName, styleProps.className)}
      style={styleProps.style}
      onClick={onClick}
      aria-expanded="true"
    >
      <Icon name="close" aria-hidden="true" />
      <VisuallyHidden>{label}</VisuallyHidden>
    </button>
  );
};

export default TooltipCloseButton;
