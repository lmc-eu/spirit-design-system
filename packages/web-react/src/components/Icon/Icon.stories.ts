import { ComponentMeta } from '@storybook/react';
import argTypes from './demo/argTypes';
import Icon from './Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: 'Icon',
      },
    },
  },
  args: {
    name: 'warning',
  },
  argTypes,
} as ComponentMeta<typeof Icon>;

export { default as Icon } from './demo/Icon';
