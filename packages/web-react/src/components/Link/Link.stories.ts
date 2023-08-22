import { ComponentMeta } from '@storybook/react';
import argTypes from './demo/argTypes';
import Link from './Link';

export default {
  title: 'Typography/Link',
  component: Link,
  parameters: {
    docs: {
      description: {
        component: 'Provide navigable target.',
      },
    },
  },
  argTypes,
} as ComponentMeta<typeof Link>;

export { default as Link } from './demo/Link';
