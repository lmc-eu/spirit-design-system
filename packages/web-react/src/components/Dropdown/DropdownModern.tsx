import React, { useRef } from 'react';
import classNames from 'classnames';
import { useClickOutside, useDeprecationMessage, useStyleProps } from '../../hooks';
import { ChildrenProps, SpiritDropdownModernProps } from '../../types';
import { DropdownProvider } from './DropdownContext';
import { useDropdownStyleProps } from './useDropdownStyleProps';

interface DropdownProps extends ChildrenProps, SpiritDropdownModernProps {}

export const DropdownModern = (props: DropdownProps) => {
  const {
    children,
    enableAutoClose = true,
    fullWidthMode,
    id,
    isOpen = false,
    onAutoClose,
    onToggle,
    placement,
    ...rest
  } = props;
  const { classProps } = useDropdownStyleProps();
  const { styleProps, props: otherProps } = useStyleProps({ ...rest });

  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>();

  const closeHandler = (event: Event) => {
    if (!enableAutoClose) {
      return;
    }

    if (!triggerRef?.current?.contains(event?.target as Node)) {
      if (onAutoClose) {
        onAutoClose(event);
      }

      onToggle && isOpen && onToggle();
    }
  };

  useClickOutside({ ref: dropdownRef, callback: closeHandler });

  useDeprecationMessage({
    method: 'component',
    trigger: true,
    componentName: 'DropdownModern',
    componentProps: {
      newName: 'Dropdown',
    },
  });

  return (
    <DropdownProvider value={{ id, isOpen, fullWidthMode, placement, onToggle, dropdownRef, triggerRef }}>
      <div
        ref={dropdownRef}
        {...styleProps}
        {...otherProps}
        className={classNames(classProps.wrapperClassName, styleProps.className)}
      >
        {children}
      </div>
    </DropdownProvider>
  );
};

export default DropdownModern;
