import React from 'react';
import { Button } from '../../Button';
import { DropdownPopover } from '../DropdownPopover';
import { DropdownTrigger } from '../DropdownTrigger';
import { UncontrolledDropdown } from '../UncontrolledDropdown';
import DropdownContentFactory from './DropdownContentFactory';
import { dropdownContent } from './constants';

const UncontrolledDropdownDemo = () => (
  <UncontrolledDropdown id="UncontrolledDropdownExample" placement="top-left">
    <DropdownTrigger elementType={Button}>Trigger button</DropdownTrigger>
    <DropdownPopover>
      <DropdownContentFactory content={dropdownContent} />
    </DropdownPopover>
  </UncontrolledDropdown>
);

export default UncontrolledDropdownDemo;
