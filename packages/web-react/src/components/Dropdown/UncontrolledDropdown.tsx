import React, { useRef } from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { UncontrolledDropdownProps } from '../../types';
import { DropdownProvider } from './DropdownContext';
import { useDropdownStyleProps } from './useDropdownStyleProps';
import { useDropdown } from './useDropdown';

export const UncontrolledDropdown = (props: UncontrolledDropdownProps) => {
  const { children, enableAutoClose = true, fullWidthMode, id, onAutoClose, placement, ...rest } = props;
  const { classProps } = useDropdownStyleProps();
  const { styleProps, props: otherProps } = useStyleProps({ ...rest });

  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>();

  const { isOpen, toggleHandler: onToggle } = useDropdown({ dropdownRef, triggerRef, enableAutoClose, onAutoClose });

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

export default UncontrolledDropdown;
