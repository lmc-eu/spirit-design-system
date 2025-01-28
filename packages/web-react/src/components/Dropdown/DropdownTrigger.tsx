'use client';

import classNames from 'classnames';
import React, { ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { DropdownTriggerProps } from '../../types';
import { useDropdownContext } from './DropdownContext';
import { useDropdownAriaProps } from './useDropdownAriaProps';
import { useDropdownStyleProps } from './useDropdownStyleProps';

const defaultProps = {
  elementType: 'button',
};

export const DropdownTrigger = <T extends ElementType = 'button'>(props: DropdownTriggerProps<T>) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType = 'button', children, ...rest } = propsWithDefaults;
  const { id, isOpen, onToggle, fullWidthMode, triggerRef } = useDropdownContext();
  const Component = elementType;
  const { classProps, props: modifiedProps } = useDropdownStyleProps({ isOpen, ...rest });
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);
  const { triggerProps } = useDropdownAriaProps({ id, isOpen, toggleHandler: onToggle, fullWidthMode });

  return (
    <Component
      {...rest} // ⚠️ This is maybe a bug, when component is pass via `elementType` prop, the rest props are passed to the component
      {...otherProps}
      {...triggerProps}
      ref={triggerRef}
      className={classNames(classProps.trigger, styleProps.className)}
      style={styleProps.style}
    >
      {typeof children === 'function' ? children({ isOpen }) : children}
    </Component>
  );
};

export default DropdownTrigger;
