import { ComponentMeta } from '@storybook/react';
import argTypes from './stories/argTypes';
import Stack from './Stack';

export default {
  title: 'Components/Stack',
  component: Stack,
  parameters: {
    docs: {
      description: {
        component: 'Stack is a component that allows you to compose elements vertically.',
      },
    },
  },
  argTypes,
} as ComponentMeta<typeof Stack>;

export { default as Stack } from './stories/Stack';
