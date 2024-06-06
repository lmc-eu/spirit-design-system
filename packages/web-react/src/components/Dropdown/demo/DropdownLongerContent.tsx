import React from 'react';
import { Button } from '../../Button';
import Dropdown from '../Dropdown';
import DropdownPopover from '../DropdownPopover';
import DropdownTrigger from '../DropdownTrigger';
import DropdownContentFactory from './DropdownContentFactory';
import { dropdownContentLonger } from './constants';

const DropdownLongerContent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onToggle = () => setIsOpen(!isOpen);

  return (
    <Dropdown id="dropdown-longer-content" isOpen={isOpen} onToggle={onToggle}>
      <DropdownTrigger elementType={Button}>Button as anchor</DropdownTrigger>
      <DropdownPopover>
        <DropdownContentFactory content={dropdownContentLonger} />
      </DropdownPopover>
    </Dropdown>
  );
};

export default DropdownLongerContent;
