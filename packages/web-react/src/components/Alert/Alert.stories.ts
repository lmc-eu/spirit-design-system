import { ComponentMeta } from '@storybook/react';
import argTypes from './stories/argTypes';
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

export { default as Alert } from './stories/Alert';
export { default as AlertColors } from './stories/AlertColors';
export { default as AlertCentered } from './stories/AlertCentered';
export { default as AlertIcons } from './stories/AlertIcons';
