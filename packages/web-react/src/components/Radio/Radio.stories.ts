import { ComponentMeta } from '@storybook/react';
import argTypes from './stories/argTypes';
import Radio from './Radio';

export default {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    docs: {
      description: {
        component:
          'Use Radio when you have a group of mutually exclusive choices and only one selection from the group is allowed.',
      },
    },
  },
  argTypes,
} as ComponentMeta<typeof Radio>;

export { default as Radio } from './stories/Radio';
export { default as RadioValidationState } from './stories/RadioValidationState';
export { default as RadioHelperText } from './stories/RadioHelperText';
export { default as RadioDisabled } from './stories/RadioDisabled';
export { default as RadioItem } from './stories/RadioItem';
export { default as RadioList } from './stories/RadioList';
export { default as Props } from './stories/RadioProps';
