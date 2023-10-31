import React from 'react';
import DropdownModern from '../../Dropdown/DropdownModern';
import DropdownTrigger from '../../Dropdown/DropdownTrigger';
import DropdownPopover from '../../Dropdown/DropdownPopover';
import { Button } from '../../Button';
import { dropdownContent } from './constants';
import DropdownContentFactory from './DropdownContentFactory';

const DropdownModernFullwidthAll = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onToggle = () => setIsOpen(!isOpen);

  return (
    <DropdownModern
      id="DropdownModernFullwidthAll"
      isOpen={isOpen}
      onToggle={onToggle}
      fullWidthMode="all"
      placement="top-left"
    >
      <DropdownTrigger elementType={Button}>Finibus quis imperdiet, semper imperdiet aliquam</DropdownTrigger>
      <DropdownPopover>
        <DropdownContentFactory content={dropdownContent} />
      </DropdownPopover>
    </DropdownModern>
  );
};

export default DropdownModernFullwidthAll;
