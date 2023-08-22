import { ComponentMeta } from '@storybook/react';
import argTypes from './demo/argTypes';
import TextArea from './TextArea';

export default {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    docs: {
      description: {
        component: 'Enables the user to type in long text.',
      },
    },
  },
  argTypes,
} as ComponentMeta<typeof TextArea>;

export { default as TextArea } from './demo/TextArea';
