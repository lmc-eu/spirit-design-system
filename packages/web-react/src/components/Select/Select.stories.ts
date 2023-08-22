import { ComponentMeta } from '@storybook/react';
import argTypes from './demo/argTypes';
import Select from './Select';

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: 'The Select component serves the user to select one option from several defined options',
      },
    },
  },
  argTypes,
} as ComponentMeta<typeof Select>;

export { default as Select } from './demo/Select';
