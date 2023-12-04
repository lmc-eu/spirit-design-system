import React from 'react';
import DropdownModern from '../../Dropdown/DropdownModern';
import DropdownTrigger from '../../Dropdown/DropdownTrigger';
import DropdownPopover from '../../Dropdown/DropdownPopover';
import { Button } from '../../Button';
import { Checkbox } from '../../Checkbox';
import { Item } from '../../Item';
import { Radio } from '../../Radio';

const DropdownModernVariousItems = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onToggle = () => setIsOpen(!isOpen);

  return (
    <DropdownModern id="DropdownModernVariousItems" isOpen={isOpen} onToggle={onToggle}>
      <DropdownTrigger elementType={Button}>Button as anchor</DropdownTrigger>
      <DropdownPopover>
        <Item elementType="a" href="#" label="Plain text" />
        <Item elementType="a" href="#" label="Item with icon" iconName="info" />
        <Checkbox id="checkbox-item" label="Item with checkbox" isItem />
        <Radio id="radio-item" label="Item with radio" isItem isChecked />
      </DropdownPopover>
    </DropdownModern>
  );
};

export default DropdownModernVariousItems;
