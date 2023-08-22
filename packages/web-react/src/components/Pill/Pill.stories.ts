import { ComponentMeta } from '@storybook/react';
import argTypes from './demo/argTypes';
import Pill from './Pill';

export default {
  title: 'Components/Pill',
  component: Pill,
  parameters: {
    docs: {
      description: {
        component: 'Can be used to show count or label.',
      },
    },
  },
  argTypes,
} as ComponentMeta<typeof Pill>;

export { default as Pill } from './demo/Pill';
