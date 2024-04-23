import classNames from 'classnames';
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

const defaultProps = {
  elementType: 'button',
};

export const DropdownTrigger = (props: DropdownTriggerProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType = 'button', children, ...rest } = propsWithDefaults;
  const { id, isOpen, onToggle, fullWidthMode, triggerRef } = useDropdownContext();
  const Component = elementType;
  const { classProps, props: modifiedProps } = useDropdownStyleProps({ isOpen, ...rest });
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);
  const { triggerProps } = useDropdownAriaProps({ id, isOpen, toggleHandler: onToggle, fullWidthMode });

  return (
    <Component
      id={id}
      {...rest}
      ref={triggerRef}
      className={classNames(classProps.triggerClassName, styleProps.className)}
      style={styleProps.style}
      {...triggerProps}
      {...otherProps}
    >
      {typeof children === 'function' ? children({ isOpen }) : children}
    </Component>
  );
};

export default DropdownTrigger;
