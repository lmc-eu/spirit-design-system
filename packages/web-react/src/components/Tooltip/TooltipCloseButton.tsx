import React from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { Icon } from '../Icon';
import { TooltipCloseButtonProps } from '../../types';
import { useTooltipStyleProps } from './useTooltipStyleProps';

const TooltipCloseButton = ({ label = 'Close', onClick, ...restProps }: TooltipCloseButtonProps) => {
  const { classProps, props: modifiedProps } = useTooltipStyleProps({ ...restProps });
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
      <span className="accessibility-hidden">{label}</span>
    </button>
  );
};

export default TooltipCloseButton;
