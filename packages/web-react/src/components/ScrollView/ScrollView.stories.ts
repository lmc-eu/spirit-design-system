import { ComponentMeta } from '@storybook/react';
import argTypes from './demo/argTypes';
import ScrollView from './ScrollView';

export default {
  title: 'Components/ScrollView',
  component: ScrollView,
  parameters: {
    docs: {
      description: {
        component: 'ScrollView makes long content scrollable.',
      },
    },
  },
  argTypes,
} as ComponentMeta<typeof ScrollView>;

export { default as ScrollView } from './demo/ScrollView';
