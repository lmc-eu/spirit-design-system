import React from 'react';
import { accessibilityOpenTest, accessibilityTest } from '@local/tests';
import { type SpiritDropdownProps } from '../../../types';
import Dropdown from '../Dropdown';
import DropdownPopover from '../DropdownPopover';
import DropdownTrigger from '../DropdownTrigger';

describe('Dropdown accessibility', () => {
  const DropdownTest = (props: SpiritDropdownProps) => (
    <Dropdown {...props} id="dropdown-example" onToggle={() => {}}>
      <DropdownTrigger>Trigger</DropdownTrigger>
      <DropdownPopover>Dropdown content</DropdownPopover>
    </Dropdown>
  );

  accessibilityTest(DropdownTest, '.Dropdown');

  accessibilityOpenTest(DropdownTest, '.Dropdown');
});
