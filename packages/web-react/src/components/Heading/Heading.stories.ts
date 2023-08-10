import { ComponentMeta } from '@storybook/react';
import argTypes from './stories/argTypes';
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

export { default as Heading } from './stories/Heading';
export { default as Sizes } from './stories/HeadingSizes';
export { default as Links } from './stories/HeadingLinks';
