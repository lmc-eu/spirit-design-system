/**
 * @deprecated Dropdown component is deprecated and will be removed in the next major version. Please use "DropdownModern" component instead.
 */
import classNames from 'classnames';
import React, { LegacyRef, createElement, useRef } from 'react';
import { Placements } from '../../constants';
import { useDeprecationMessage, useStyleProps } from '../../hooks';
import { SpiritDropdownProps } from '../../types';
import DropdownWrapper from './DropdownWrapper';
import { useDropdown } from './useDropdown';
import { useDropdownAriaProps } from './useDropdownAriaProps';
import { useDropdownStyleProps } from './useDropdownStyleProps';

const defaultProps = {
  enableAutoClose: true,
  placement: Placements.BOTTOM_START,
};

export const Dropdown = (props: SpiritDropdownProps) => {
  const {
    /** @deprecated ID will be made a required user input in the next major version. */
    id = Math.random().toString(36).slice(2, 7),
    children,
    enableAutoClose,
    fullWidthMode,
    onAutoClose,
    placement = defaultProps.placement,
    renderTrigger,
    ...rest
  } = props;

  const dropdownRef = useRef(null);
  const triggerRef = useRef();

  const { isOpen, toggleHandler } = useDropdown({ dropdownRef, triggerRef, enableAutoClose, onAutoClose });
  const { classProps, props: modifiedProps } = useDropdownStyleProps({ isOpen, ...rest });
  const { triggerProps, contentProps } = useDropdownAriaProps({ id, isOpen, fullWidthMode, placement, toggleHandler });

  const { styleProps: contentStyleProps, props: contentOtherProps } = useStyleProps({ ...modifiedProps });
  const { styleProps: triggerStyleProps } = useStyleProps({
    UNSAFE_className: classProps.triggerClassName,
  });

  useDeprecationMessage({
    method: 'custom',
    trigger: true,
    componentName: 'Dropdown',
    customText:
      'Dropdown component is deprecated and will be removed in the next major version. Please use "DropdownModern" component instead.',
  });

  const triggerRenderHandler = () => {
    if (renderTrigger) {
      return renderTrigger({
        isOpen,
        trigger: {
          ...triggerStyleProps,
          ...triggerProps,
          ref: triggerRef as unknown as LegacyRef<HTMLButtonElement & HTMLAnchorElement>,
        },
      });
    }

    return null;
  };

  const content = createElement(
    'div',
    {
      ...contentOtherProps,
      ...contentStyleProps,
      ...contentProps,
      className: classNames(classProps.contentClassName, contentStyleProps.className),
      style: {
        ...contentStyleProps.style,
      },
      ref: dropdownRef,
    },
    children,
  );

  return (
    <DropdownWrapper>
      {triggerRenderHandler()}
      {content}
    </DropdownWrapper>
  );
};

Dropdown.defaultProps = defaultProps;

export default Dropdown;
