import { ComponentMeta } from '@storybook/react';
import argTypes from './stories/argTypes';
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

export { default as Link } from './stories/Link';
export { default as LinkColors } from './stories/LinkColors';
export { default as LinkDisabled } from './stories/DisabledLink';
export { default as LinkUnderlined } from './stories/UnderlinedLink';
export { default as LinkDisabledUnderlined } from './stories/DisabledUnderlinedLink';
