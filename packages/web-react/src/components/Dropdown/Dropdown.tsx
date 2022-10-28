import React, { createElement, useRef, LegacyRef } from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks/styleProps';
import { SpiritDropdownProps } from '../../types';
import { useDropdown } from './useDropdown';
import { useDropdownStyleProps } from './useDropdownStyleProps';
import { useDropdownAriaProps } from './useDropdownAriaProps';

const Dropdown = (props: SpiritDropdownProps) => {
  const { id = Math.random().toString(36).slice(2, 7), children, renderTrigger, disableAutoClose, ...rest } = props;

  const dropdownRef = useRef();
  const triggerRef = useRef();

  const { isOpen, toggleHandler } = useDropdown({ dropdownRef, triggerRef, disableAutoClose });
  const { wrapperClassName, triggerClassName } = useDropdownStyleProps({ isOpen });
  const { triggerProps, wrapperProps } = useDropdownAriaProps({ id, isOpen, toggleHandler });

  const { styleProps: wrapperStyleProps, props: wrapperOtherProps } = useStyleProps({ ...rest });
  const { styleProps: triggerStyleProps } = useStyleProps({
    UNSAFE_className: triggerClassName,
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

  const wrapper = createElement(
    'div',
    {
      ...wrapperOtherProps,
      ...wrapperStyleProps,
      ...wrapperProps,
      className: classNames(wrapperClassName, wrapperStyleProps.className),
      style: {
        ...wrapperStyleProps.style,
      },
      ref: dropdownRef,
    },
    children,
  );

  return (
    <>
      {triggerRenderHandler()}
      {wrapper}
    </>
  );
};

export default Dropdown;
