import { ComponentMeta } from '@storybook/react';
import argTypes from './demo/argTypes';
import ButtonLink from './ButtonLink';

export default {
  title: 'Components/ButtonLink',
  component: ButtonLink,
  parameters: {
    docs: {
      description: {
        component: 'ButtonLinks allow users to take actions.',
      },
    },
  },
  argTypes: {
    ...argTypes,
    href: {
      control: {
        type: 'text',
      },
      defaultValue: '#',
    },
  },
} as ComponentMeta<typeof ButtonLink>;

export { default as ButtonLink } from './demo/ButtonLink';
