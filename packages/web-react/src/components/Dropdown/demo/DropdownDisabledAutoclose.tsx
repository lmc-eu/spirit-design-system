import React from 'react';
import { Button } from '../../Button';
import Dropdown from '../Dropdown';
import DropdownPopover from '../DropdownPopover';
import DropdownTrigger from '../DropdownTrigger';
import DropdownContentFactory from './DropdownContentFactory';
import { dropdownContent } from './constants';

const DropdownDisabledAutoclose = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onToggle = () => setIsOpen(!isOpen);

  return (
    <Dropdown id="dropdown-disabled-autoclose" isOpen={isOpen} onToggle={onToggle} enableAutoClose={false}>
      <DropdownTrigger elementType={Button}>Button as anchor</DropdownTrigger>
      <DropdownPopover>
        <DropdownContentFactory content={dropdownContent} />
      </DropdownPopover>
    </Dropdown>
  );
};

export default DropdownDisabledAutoclose;
