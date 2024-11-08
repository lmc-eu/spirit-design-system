import React from 'react';
import { Button } from '../../Button';
import DropdownPopover from '../DropdownPopover';
import DropdownTrigger from '../DropdownTrigger';
import UncontrolledDropdown from '../UncontrolledDropdown';
import { dropdownContent } from './constants';
import DropdownContentFactory from './DropdownContentFactory';

const UncontrolledDropdownDemo = () => (
  <UncontrolledDropdown id="uncontrolled-dropdown-example" placement="top-start">
    <DropdownTrigger elementType={Button}>Trigger button</DropdownTrigger>
    <DropdownPopover>
      <DropdownContentFactory content={dropdownContent} />
    </DropdownPopover>
  </UncontrolledDropdown>
);

export default UncontrolledDropdownDemo;
