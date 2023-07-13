import { ComponentMeta } from '@storybook/react';
import argTypes from './stories/argTypes';
import Checkbox from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: 'Use Checkbox when you have a group of choices and any selection from the group is allowed.',
      },
    },
  },
  argTypes,
} as ComponentMeta<typeof Checkbox>;

export { default as Checkbox } from './stories/Checkbox';
export { default as CheckboxValidationState } from './stories/CheckboxValidationState';
export { default as CheckboxHelperText } from './stories/CheckboxHelperText';
export { default as CheckboxItem } from './stories/CheckboxItem';
export { default as Props } from './stories/CheckboxProps';
