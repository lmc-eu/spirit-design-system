import { ComponentMeta } from '@storybook/react';
import argTypes from './demo/argTypes';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Buttons allow users to take actions.',
      },
    },
  },
  argTypes: {
    ...argTypes,
    type: {
      control: {
        type: 'select',
        options: ['button', 'submit', 'reset'],
      },
      defaultValue: 'button',
    },
  },
} as ComponentMeta<typeof Button>;

export { default as Button } from './demo/Button';
