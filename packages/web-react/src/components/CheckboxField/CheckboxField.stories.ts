import { ComponentMeta } from '@storybook/react';
import argTypes from './stories/argTypes';
import CheckboxField from './CheckboxField';

export default {
  title: 'Components/CheckboxField',
  component: CheckboxField,
  parameters: {
    docs: {
      description: {
        component: 'Use CheckboxField when you have a group of choices and any selection from the group is allowed.',
      },
    },
  },
  argTypes,
} as ComponentMeta<typeof CheckboxField>;

export { default as CheckboxField } from './stories/CheckboxField';
export { default as CheckboxFieldValidationState } from './stories/CheckboxFieldValidationState';
export { default as CheckboxFieldHelperText } from './stories/CheckboxFieldHelperText';
export { default as CheckboxFieldItem } from './stories/CheckboxFieldItem';
export { default as Props } from './stories/CheckboxFieldProps';
