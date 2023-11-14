import React from 'react';
import DropdownModern from '../../Dropdown/DropdownModern';
import DropdownTrigger from '../../Dropdown/DropdownTrigger';
import DropdownPopover from '../../Dropdown/DropdownPopover';
import { Button } from '../../Button';
import { dropdownContent } from './constants';
import DropdownContentFactory from './DropdownContentFactory';

const DropdownModernEnhancedShadow = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onToggle = () => setIsOpen(!isOpen);

  return (
    <div className="spirit-feature-dropdown-enable-enhanced-shadow">
      <DropdownModern id="DropdownModernEnhancedShadow" isOpen={isOpen} onToggle={onToggle} placement="top-left">
        <DropdownTrigger elementType={Button}>Finibus quis imperdiet, semper imperdiet aliquam</DropdownTrigger>
        <DropdownPopover>
          <DropdownContentFactory content={dropdownContent} />
        </DropdownPopover>
      </DropdownModern>
    </div>
  );
};

export default DropdownModernEnhancedShadow;
