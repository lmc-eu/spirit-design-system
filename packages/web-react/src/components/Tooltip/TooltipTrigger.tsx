'use client';

import React from 'react';
import { useStyleProps } from '../../hooks';
import { TooltipTriggerProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { useTooltipContext } from './TooltipContext';

const defaultProps: Partial<TooltipTriggerProps> = {
  elementType: 'button',
  children: null,
};

const TooltipTrigger = (props: TooltipTriggerProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType: ElementTag = 'button', children, ...restProps } = propsWithDefaults;
  const { id, isOpen, triggerRef, getReferenceProps } = useTooltipContext();
  const { styleProps: triggerStyleProps, props: transferProps } = useStyleProps(restProps);
  const mergedStyleProps = mergeStyleProps(ElementTag, { triggerStyleProps, transferProps });

  return (
    <ElementTag {...transferProps} {...mergedStyleProps} id={id} ref={triggerRef} {...getReferenceProps()}>
      {typeof children === 'function' ? children({ isOpen }) : children}
    </ElementTag>
  );
};

TooltipTrigger.spiritComponent = 'TooltipTrigger';

export default TooltipTrigger;
