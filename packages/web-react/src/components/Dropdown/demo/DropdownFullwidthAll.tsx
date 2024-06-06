import React from 'react';
import { Button } from '../../Button';
import Dropdown from '../Dropdown';
import DropdownPopover from '../DropdownPopover';
import DropdownTrigger from '../DropdownTrigger';
import DropdownContentFactory from './DropdownContentFactory';
import { dropdownContent } from './constants';

const DropdownFullwidthAll = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onToggle = () => setIsOpen(!isOpen);

  return (
    <Dropdown id="dropdown-fullwidth-all" isOpen={isOpen} onToggle={onToggle} fullWidthMode="all" placement="top-start">
      <DropdownTrigger elementType={Button}>Finibus quis imperdiet, semper imperdiet aliquam</DropdownTrigger>
      <DropdownPopover>
        <DropdownContentFactory content={dropdownContent} />
      </DropdownPopover>
    </Dropdown>
  );
};

export default DropdownFullwidthAll;
