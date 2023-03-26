import { ComponentMeta } from '@storybook/react';
import argTypes from './stories/argTypes';
import Spinner from './Spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component: 'Indicates something is loading.',
      },
    },
  },
  argTypes,
} as ComponentMeta<typeof Spinner>;

export { default as Spinner } from './stories/Spinner';
export { default as SpinnerColors } from './stories/SpinnerColors';
export { default as HTML } from './stories/SpinnerHtml';
export { default as Props } from './stories/SpinnerProps';
