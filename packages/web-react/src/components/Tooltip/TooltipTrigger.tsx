'use client';

import React from 'react';
import { useStyleProps } from '../../hooks';
import { TooltipTriggerProps } from '../../types';
import { useTooltipContext } from './TooltipContext';

const defaultProps: Partial<TooltipTriggerProps> = {
  elementType: 'button',
  children: null,
};

const TooltipTrigger = (props: TooltipTriggerProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType: ElementTag = 'button', children, ...rest } = propsWithDefaults;
  const { id, isOpen, triggerRef, getReferenceProps } = useTooltipContext();

  const { styleProps: triggerStyleProps, props: transferProps } = useStyleProps({ ElementTag, ...rest });

  return (
    <ElementTag {...transferProps} {...triggerStyleProps} id={id} ref={triggerRef} {...getReferenceProps()}>
      {typeof children === 'function' ? children({ isOpen }) : children}
    </ElementTag>
  );
};

TooltipTrigger.spiritComponent = 'TooltipTrigger';

export default TooltipTrigger;
