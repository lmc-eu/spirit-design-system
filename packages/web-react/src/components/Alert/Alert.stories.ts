import { ComponentMeta } from '@storybook/react';
import argTypes from './demo/argTypes';
import Alert from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: 'Provide contextual feedback messages for typical user actions.',
      },
    },
  },
  argTypes,
} as ComponentMeta<typeof Alert>;

export { default as Alert } from './demo/Alert';
