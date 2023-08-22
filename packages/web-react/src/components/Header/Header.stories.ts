import { ComponentMeta } from '@storybook/react';
import argTypes from './demo/argTypes';
import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component: 'Provide page header.',
      },
    },
  },
  args: {
    color: 'inverted',
  },
  argTypes,
} as ComponentMeta<typeof Header>;

export { default as Header } from './demo/Header';
