import { ComponentMeta } from '@storybook/react';
import argTypes from './stories/argTypes';
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

export { default as ScrollView } from './stories/ScrollView';
export { default as ScrollViewHorizontal } from './stories/ScrollViewHorizontal';
export { default as ScrollViewScrollbarDisabled } from './stories/ScrollViewScrollbarDisabled';
