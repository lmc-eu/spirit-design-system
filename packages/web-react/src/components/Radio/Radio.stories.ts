import { ComponentMeta } from '@storybook/react';
import argTypes from './demo/argTypes';
import Radio from './Radio';

export default {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    docs: {
      description: {
        component:
          'Use Radio when you have a group of mutually exclusive choices and only one selection from the group is allowed.',
      },
    },
  },
  args: {
    label: 'Radio',
  },
  argTypes,
} as ComponentMeta<typeof Radio>;

export { default as Radio } from './demo/Radio';
