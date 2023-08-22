import { ComponentMeta } from '@storybook/react';
import argTypes from './demo/argTypes';
import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes,
} as ComponentMeta<typeof Dropdown>;

export { default as Dropdown } from './demo/Dropdown';
