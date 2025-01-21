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

const DropdownTrigger = <T extends ElementType = 'button'>(props: DropdownTriggerProps<T>) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType: ElementTag = 'button', children, ...rest } = propsWithDefaults;
  const { id, isOpen, onToggle, fullWidthMode, triggerRef } = useDropdownContext();
  const { classProps, props: modifiedProps } = useDropdownStyleProps({ isOpen, ...rest });
  const { styleProps, props: otherProps } = useStyleProps({ ElementTag, ...modifiedProps });
  const { triggerProps } = useDropdownAriaProps({ id, isOpen, toggleHandler: onToggle, fullWidthMode });

  return (
    <ElementTag
      {...rest} // ⚠️ This is maybe a bug, when component is pass via `elementType` prop, the rest props are passed to the component
      {...otherProps}
      {...triggerProps}
      id={id}
      ref={triggerRef}
      className={classNames(classProps.trigger, styleProps.className)}
      style={styleProps.style}
    >
      {typeof children === 'function' ? children({ isOpen }) : children}
    </ElementTag>
  );
};

DropdownTrigger.spiritComponent = 'DropdownTrigger';

export default DropdownTrigger;
