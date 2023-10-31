import React from 'react';
import DropdownModern from '../../Dropdown/DropdownModern';
import DropdownTrigger from '../../Dropdown/DropdownTrigger';
import DropdownPopover from '../../Dropdown/DropdownPopover';
import { Button } from '../../Button';
import { dropdownContent } from './constants';
import DropdownContentFactory from './DropdownContentFactory';

const DropdownModernDefault = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onToggle = () => setIsOpen(!isOpen);

  return (
    <DropdownModern id="DropdownModernDefault" isOpen={isOpen} onToggle={onToggle}>
      <DropdownTrigger elementType={Button}>Button as anchor</DropdownTrigger>
      <DropdownPopover>
        <DropdownContentFactory content={dropdownContent} />
      </DropdownPopover>
    </DropdownModern>
  );
};

export default DropdownModernDefault;
