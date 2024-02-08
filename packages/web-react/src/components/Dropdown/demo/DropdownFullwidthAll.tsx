import React, { Ref } from 'react';
import { DropdownRenderProps } from '../../../types';
import { Button } from '../../Button';
import { Dropdown } from '..';
import DropdownContentFactory from './DropdownContentFactory';
import { dropdownContent } from './constants';

const DropdownFullwidthAll = () => {
  const dropdownTrigger = ({ trigger: { className, ref, ...restOf } }: DropdownRenderProps) => (
    <Button UNSAFE_className={className} ref={ref as Ref<HTMLButtonElement>} {...restOf}>
      Finibus quis imperdiet, semper imperdiet aliquam
    </Button>
  );

  return (
    <Dropdown renderTrigger={dropdownTrigger} fullWidthMode="all" placement="top-start">
      <DropdownContentFactory content={dropdownContent} />
    </Dropdown>
  );
};

export default DropdownFullwidthAll;
