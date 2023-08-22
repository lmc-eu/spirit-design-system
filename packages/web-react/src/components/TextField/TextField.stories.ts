import { ComponentMeta } from '@storybook/react';
import argTypes from './demo/argTypes';
import TextField from './TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    docs: {
      description: {
        component: 'Enables the user to type in text information.',
      },
    },
  },
  argTypes,
} as ComponentMeta<typeof TextField>;

export { default as TextField } from './demo/TextField';
