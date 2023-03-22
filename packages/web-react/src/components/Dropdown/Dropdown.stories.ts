import { ComponentMeta } from '@storybook/react';
import argTypes from './stories/argTypes';
import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes,
} as ComponentMeta<typeof Dropdown>;

export { default as Dropdown } from './stories/Dropdown';
export { default as DropdownDisableAutoClose } from './stories/DropdownDisableAutoClose';
export { default as DropdownFullWidth } from './stories/DropdownFullWidth';
export { default as DropdownPlacements } from './stories/DropdownPlacements';
export { default as DropdownBreakpoints } from './stories/DropdownBreakpoints';
export { default as DropdownFullWidthMode } from './stories/DropdownFullWidthMode';
