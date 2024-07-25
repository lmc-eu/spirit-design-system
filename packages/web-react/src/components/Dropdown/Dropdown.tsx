'use client';

import classNames from 'classnames';
import React, { useRef } from 'react';
import { useClickOutside, useStyleProps } from '../../hooks';
import { SpiritDropdownProps } from '../../types';
import { DropdownProvider } from './DropdownContext';
import { useDropdownStyleProps } from './useDropdownStyleProps';

export const Dropdown = (props: SpiritDropdownProps) => {
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
  const { classProps, props: modifiedProps } = useDropdownStyleProps({ isOpen, ...rest });
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

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

  return (
    <DropdownProvider value={{ id, isOpen, fullWidthMode, placement, onToggle, dropdownRef, triggerRef }}>
      <div
        ref={dropdownRef}
        className={classNames(classProps.root, styleProps.className)}
        style={styleProps.style}
        {...otherProps}
      >
        {children}
      </div>
    </DropdownProvider>
  );
};

export default Dropdown;
