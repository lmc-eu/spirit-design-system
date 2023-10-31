import React, { ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { StyleProps } from '../../types';
import { useDropdownContext } from './DropdownContext';
import { useDropdownAriaProps } from './useDropdownAriaProps';
import { useDropdownStyleProps } from './useDropdownStyleProps';

interface DropdownTriggerProps extends StyleProps {
  elementType?: ElementType | string;
  children: string | React.ReactNode | ((props: { isOpen: boolean }) => React.ReactNode);
}

export const DropdownTrigger = (props: DropdownTriggerProps) => {
  const { elementType = 'button', children, ...rest } = props;
  const { id, isOpen, onToggle, fullWidthMode, triggerRef } = useDropdownContext();

  const Component = elementType;

  const { classProps } = useDropdownStyleProps({ isOpen, ...rest });
  const { styleProps: triggerStyleProps } = useStyleProps({
    UNSAFE_className: classProps.triggerClassName,
  });
  const { triggerProps } = useDropdownAriaProps({ id, isOpen, toggleHandler: onToggle, fullWidthMode });

  return (
    <Component id={id} {...rest} ref={triggerRef} {...triggerStyleProps} {...triggerProps}>
      {typeof children === 'function' ? children({ isOpen }) : children}
    </Component>
  );
};

DropdownTrigger.defaultProps = {
  elementType: 'button',
};

export default DropdownTrigger;
