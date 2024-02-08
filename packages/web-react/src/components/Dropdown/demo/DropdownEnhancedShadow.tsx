import React, { Ref } from 'react';
import { DropdownRenderProps } from '../../../types';
import { Button } from '../../Button';
import { Dropdown } from '..';
import DropdownContentFactory from './DropdownContentFactory';
import { dropdownContent } from './constants';

const DropdownEnhancedShadow = () => {
  const dropdownTrigger = ({ trigger: { className, ref, ...restOf } }: DropdownRenderProps) => (
    <Button UNSAFE_className={className} ref={ref as Ref<HTMLButtonElement>} {...restOf}>
      Finibus quis imperdiet, semper imperdiet aliquam
    </Button>
  );

  return (
    <div className="spirit-feature-dropdown-enable-enhanced-shadow">
      <Dropdown renderTrigger={dropdownTrigger} placement="top-start">
        <DropdownContentFactory content={dropdownContent} />
      </Dropdown>
    </div>
  );
};

export default DropdownEnhancedShadow;
