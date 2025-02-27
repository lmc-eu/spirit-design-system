'use client';

import React, { ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { DropdownTriggerProps } from '../../types';
import { mergeStyleProps } from '../../utils';
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
  const { styleProps: triggerStyleProps, props: transferProps } = useStyleProps(modifiedProps);
  const mergedStyleProps = mergeStyleProps(ElementTag, { classProps: classProps.trigger, triggerStyleProps });
  const { triggerProps } = useDropdownAriaProps({ id, isOpen, toggleHandler: onToggle, fullWidthMode });

  return (
    <ElementTag {...transferProps} {...triggerProps} {...mergedStyleProps} ref={triggerRef}>
      {typeof children === 'function' ? children({ isOpen }) : children}
    </ElementTag>
  );
};

DropdownTrigger.spiritComponent = 'DropdownTrigger';

export default DropdownTrigger;
