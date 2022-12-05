import React, { createElement, useRef, LegacyRef } from 'react';
import classNames from 'classnames';
import DropdownWrapper from './DropdownWrapper';
import { useStyleProps } from '../../hooks/styleProps';
import { DropdownPlacements, SpiritDropdownProps } from '../../types';
import { useDropdown } from './useDropdown';
import { useDropdownStyleProps } from './useDropdownStyleProps';
import { useDropdownAriaProps } from './useDropdownAriaProps';

const defaultProps = {
  isFullWidth: false,
  placement: DropdownPlacements.BOTTOM_LEFT,
  enableAutoClose: true,
};

const Dropdown = (props: SpiritDropdownProps) => {
  const {
    id = Math.random().toString(36).slice(2, 7),
    children,
    renderTrigger,
    enableAutoClose,
    breakpoint,
    onAutoClose,
    ...rest
  } = props;

  const dropdownRef = useRef(null);
  const triggerRef = useRef();

  const { isOpen, toggleHandler } = useDropdown({ dropdownRef, triggerRef, enableAutoClose, onAutoClose });
  const { classProps, props: modifiedProps } = useDropdownStyleProps({ isOpen, ...rest });
  const { triggerProps, contentProps } = useDropdownAriaProps({ id, isOpen, toggleHandler, breakpoint });

  const { styleProps: contentStyleProps, props: contentOtherProps } = useStyleProps({ ...modifiedProps });
  const { styleProps: triggerStyleProps } = useStyleProps({
    UNSAFE_className: classProps.triggerClassName,
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
