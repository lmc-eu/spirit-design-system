import { ComponentMeta } from '@storybook/react';
import argTypes from './demo/argTypes';
import Spinner from './Spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component: 'Indicates something is loading.',
      },
    },
  },
  argTypes,
} as ComponentMeta<typeof Spinner>;

export { default as Spinner } from './demo/Spinner';
