import { ComponentMeta } from '@storybook/react';
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
} as ComponentMeta<typeof CheckboxField>;

export { default as CheckboxField } from './stories/CheckboxField';
export { default as CheckboxFieldError } from './stories/CheckboxFieldError';
export { default as CheckboxFieldItem } from './stories/CheckboxFieldItem';
export { default as Props } from './stories/CheckboxFieldProps';
