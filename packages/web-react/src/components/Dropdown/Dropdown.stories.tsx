import { ComponentMeta } from '@storybook/react';
import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

export { default as Dropdown } from './stories/Dropdown';
export { default as DisableAutoClose } from './stories/DisableAutoClose';
