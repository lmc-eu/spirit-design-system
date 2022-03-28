import { ComponentMeta } from '@storybook/react';
import Heading from './Heading';

export default {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    docs: {
      description: {
        component: `Provide sizes for headings.`,
      },
    },
  },
} as ComponentMeta<typeof Heading>;

export { default as Heading } from './stories/Heading';
export { default as Sizes } from './stories/HeadingSizes';
export { default as Links } from './stories/HeadingLinks';
export { default as Props } from './stories/HeadingProps';
