import React, { ElementType, ReactNode } from 'react';
import { useStyleProps } from '../../hooks';
import { StyleProps, TransferProps } from '../../types';
import { useTooltipContext } from './TooltipContext';

interface TooltipTriggerProps extends StyleProps, TransferProps {
  elementType?: ElementType | string;
  children?: string | ReactNode | ((props: { isOpen: boolean }) => React.ReactNode);
}

const TooltipTrigger = (props: TooltipTriggerProps) => {
  const { elementType = 'button', children, ...rest } = props;
  const { id, isOpen, triggerRef, getReferenceProps } = useTooltipContext();

  const Component = elementType;

  const { styleProps: triggerStyleProps, props: transferProps } = useStyleProps(rest);

  return (
    <Component {...transferProps} {...triggerStyleProps} id={id} {...rest} ref={triggerRef} {...getReferenceProps()}>
      {typeof children === 'function' ? children({ isOpen }) : children}
    </Component>
  );
};

TooltipTrigger.defaultProps = {
  elementType: 'button',
  children: null,
};

export default TooltipTrigger;
