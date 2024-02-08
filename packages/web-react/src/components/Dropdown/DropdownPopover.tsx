import React from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { ChildrenProps, StyleProps } from '../../types';
import { useDropdownContext } from './DropdownContext';
import { useDropdownAriaProps } from './useDropdownAriaProps';
import { useDropdownStyleProps } from './useDropdownStyleProps';

interface DropdownPopoverProps extends ChildrenProps, StyleProps {}

export const DropdownPopover = (props: DropdownPopoverProps) => {
  const { children, ...rest } = props;
  const { id, isOpen, onToggle, fullWidthMode, placement } = useDropdownContext();
  const { classProps, props: modifiedProps } = useDropdownStyleProps({ isOpen, ...rest });
  const { styleProps: contentStyleProps, props: contentOtherProps } = useStyleProps({ ...modifiedProps });
  const { contentProps } = useDropdownAriaProps({ id, isOpen, toggleHandler: onToggle, placement, fullWidthMode });

  return (
    <div
      className={classNames(classProps.contentClassName, contentStyleProps.className)}
      {...contentOtherProps}
      {...contentProps}
    >
      {children}
    </div>
  );
};

export default DropdownPopover;
