import { ComponentMeta } from '@storybook/react';
import argTypes from './stories/argTypes';
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
  argTypes,
} as ComponentMeta<typeof Icon>;

export { default as Icon } from './stories/Icon';
