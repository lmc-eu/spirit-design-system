'use client';

import React, { ElementType, ReactNode } from 'react';
import { useStyleProps } from '../../hooks';
import { StyleProps, TransferProps } from '../../types';
import { useTooltipContext } from './TooltipContext';

interface TooltipTriggerProps extends StyleProps, TransferProps {
  elementType?: ElementType | string;
  children?: string | ReactNode | ((props: { isOpen: boolean }) => ReactNode);
}

const defaultProps: TooltipTriggerProps = {
  elementType: 'button',
  children: null,
};

const TooltipTrigger = (props: TooltipTriggerProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType = 'button', children, ...rest } = propsWithDefaults;
  const { id, isOpen, triggerRef, getReferenceProps } = useTooltipContext();

  const Component = elementType;

  const { styleProps: triggerStyleProps, props: transferProps } = useStyleProps(rest);

  return (
    <Component {...transferProps} {...triggerStyleProps} id={id} ref={triggerRef} {...getReferenceProps()}>
      {typeof children === 'function' ? children({ isOpen }) : children}
    </Component>
  );
};

export default TooltipTrigger;
