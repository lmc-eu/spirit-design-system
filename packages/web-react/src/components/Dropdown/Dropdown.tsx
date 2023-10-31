import classNames from 'classnames';
import React, { LegacyRef, createElement, useRef } from 'react';
import { Placements } from '../../constants';
import DropdownWrapper from './DropdownWrapper';
import { useDeprecationMessage, useStyleProps } from '../../hooks';
import { SpiritDropdownProps } from '../../types';
import { useDropdown } from './useDropdown';
import { useDropdownAriaProps } from './useDropdownAriaProps';
import { useDropdownStyleProps } from './useDropdownStyleProps';

const defaultProps = {
  enableAutoClose: true,
  placement: Placements.BOTTOM_LEFT,
};

/**
 * @deprecated Dropdown component is deprecated and will be removed in the next major version. Please use "DropdownModern" component instead.
 */
export const Dropdown = (props: SpiritDropdownProps) => {
  const {
    id = Math.random().toString(36).slice(2, 7),
    children,
    renderTrigger,
    enableAutoClose,
    fullWidthMode,
    onAutoClose,
    ...rest
  } = props;

  const dropdownRef = useRef(null);
  const triggerRef = useRef();

  const { isOpen, toggleHandler } = useDropdown({ dropdownRef, triggerRef, enableAutoClose, onAutoClose });
  const { classProps, props: modifiedProps } = useDropdownStyleProps({ isOpen, ...rest });
  const { triggerProps, contentProps } = useDropdownAriaProps({ id, isOpen, toggleHandler, fullWidthMode });

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
