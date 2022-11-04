import React from 'react';
import { ChildrenProps } from '../../types';
import { useDropdownStyleProps } from './useDropdownStyleProps';

interface DropdownWrapperProps extends ChildrenProps {}

const DropdownWrapper = ({ children }: DropdownWrapperProps) => {
  const { classProps } = useDropdownStyleProps();

  return <div className={classProps.wrapperClassName}>{children}</div>;
};

export default DropdownWrapper;
