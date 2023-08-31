import React, { Ref } from 'react';
import { DropdownRenderProps } from '../../../types';
import { Button } from '../../Button';
import { Dropdown } from '..';
import DropdownContentFactory from './DropdownContentFactory';
import { dropdownContent } from './constants';

const DropdownDefault = () => {
  const dropdownTrigger = ({ trigger: { className, ref, ...restOf } }: DropdownRenderProps) => (
    <Button UNSAFE_className={className} ref={ref as Ref<HTMLButtonElement>} {...restOf}>
      Button as anchor
    </Button>
  );

  return (
    <Dropdown renderTrigger={dropdownTrigger}>
      <DropdownContentFactory content={dropdownContent} />
    </Dropdown>
  );
};

export default DropdownDefault;
