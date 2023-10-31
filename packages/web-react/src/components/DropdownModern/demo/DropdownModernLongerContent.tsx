import React from 'react';
import DropdownModern from '../../Dropdown/DropdownModern';
import DropdownTrigger from '../../Dropdown/DropdownTrigger';
import DropdownPopover from '../../Dropdown/DropdownPopover';
import { Button } from '../../Button';
import { dropdownContentLonger } from './constants';
import DropdownContentFactory from './DropdownContentFactory';

const DropdownModernLongerContent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onToggle = () => setIsOpen(!isOpen);

  return (
    <DropdownModern id="DropdownModernLongerContent" isOpen={isOpen} onToggle={onToggle}>
      <DropdownTrigger elementType={Button}>Button as anchor</DropdownTrigger>
      <DropdownPopover>
        <DropdownContentFactory content={dropdownContentLonger} />
      </DropdownPopover>
    </DropdownModern>
  );
};

export default DropdownModernLongerContent;
