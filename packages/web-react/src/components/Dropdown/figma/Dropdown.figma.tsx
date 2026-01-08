import figma from '@figma/code-connect';
import React from 'react';
import Dropdown from '../Dropdown';
import DropdownPopover from '../DropdownPopover';
import DropdownTrigger from '../DropdownTrigger';

figma.connect(Dropdown, '<FIGMA_FILE_ID>?node-id=8345%3A3501', {
  props: {
    placement: figma.enum('Placement', {
      Top: 'top',
      'Top Start': 'top-start',
      'Top  End': 'top-end',
      Bottom: 'bottom',
      'Bottom Start': 'bottom-start',
      'Bottom End': 'bottom-end',
      Left: 'left',
      'Left Start': 'left-start',
      'Left End': 'left-end',
      Right: 'right',
      'Right Start': 'right-start',
      'Right End': 'right-end',
    }),
    isOpen: figma.boolean('Open'),
  },
  example: (props) => (
    <Dropdown id="dropdown-example" isOpen={props.isOpen} onToggle={() => {}} placement={props.placement}>
      <DropdownTrigger>Trigger</DropdownTrigger>
      <DropdownPopover>Dropdown Content</DropdownPopover>
    </Dropdown>
  ),
});
