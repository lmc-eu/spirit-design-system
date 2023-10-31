import React from 'react';
import DropdownModern from '../../Dropdown/DropdownModern';
import DropdownTrigger from '../../Dropdown/DropdownTrigger';
import DropdownPopover from '../../Dropdown/DropdownPopover';
import { Button } from '../../Button';
import { dropdownContent } from './constants';
import DropdownContentFactory from './DropdownContentFactory';

const DropdownModernFullwidthMobileOnly = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onToggle = () => setIsOpen(!isOpen);

  return (
    <DropdownModern
      id="DropdownModernFullwidthMobileOnly"
      isOpen={isOpen}
      onToggle={onToggle}
      fullWidthMode="mobile-only"
      placement="top-left"
    >
      <DropdownTrigger elementType={Button}>Finibus quis imperdiet, semper imperdiet aliquam</DropdownTrigger>
      <DropdownPopover>
        <DropdownContentFactory content={dropdownContent} />
      </DropdownPopover>
    </DropdownModern>
  );
};

export default DropdownModernFullwidthMobileOnly;
