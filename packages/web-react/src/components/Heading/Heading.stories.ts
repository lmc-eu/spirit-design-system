import { ComponentMeta } from '@storybook/react';
import argTypes from './demo/argTypes';
import Heading from './Heading';

export default {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    docs: {
      description: {
        component: 'Provide sizes for headings.',
      },
    },
  },
  argTypes,
} as ComponentMeta<typeof Heading>;

export { default as Heading } from './demo/Heading';
