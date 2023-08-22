import { ComponentMeta } from '@storybook/react';
import argTypes from './demo/argTypes';
import Checkbox from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: 'Use Checkbox when you have a group of choices and any selection from the group is allowed.',
      },
    },
  },
  args: {
    label: 'Checkbox',
  },
  argTypes,
} as ComponentMeta<typeof Checkbox>;

export { default as Checkbox } from './demo/Checkbox';
