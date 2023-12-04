import React, { Ref } from 'react';
import { DropdownRenderProps } from '../../../types';
import { Button } from '../../Button';
import { Checkbox } from '../../Checkbox';
import { Radio } from '../../Radio';
import { Item } from '../../Item';
import { Dropdown } from '..';

const DropdownVariousItems = () => {
  const dropdownTrigger = ({ trigger: { className, ref, ...restOf } }: DropdownRenderProps) => (
    <Button UNSAFE_className={className} ref={ref as Ref<HTMLButtonElement>} {...restOf}>
      Button as anchor
    </Button>
  );

  return (
    <Dropdown renderTrigger={dropdownTrigger}>
      <Item elementType="a" href="#" label="Plain text" />
      <Item elementType="a" href="#" label="Item with icon" iconName="info" />
      <Checkbox id="checkbox-item" label="Item with checkbox" isItem />
      <Radio id="radio-item" label="Item with radio" isItem isChecked />
    </Dropdown>
  );
};

export default DropdownVariousItems;
