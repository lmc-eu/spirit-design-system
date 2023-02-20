import { ComponentMeta } from '@storybook/react';
import RadioField from './RadioField';

export default {
  title: 'Components/RadioField',
  component: RadioField,
  parameters: {
    docs: {
      description: {
        component:
          'Use RadioField when you have a group of mutually exclusive choices and only one selection from the group is allowed.',
      },
    },
  },
} as ComponentMeta<typeof RadioField>;

export { default as RadioField } from './stories/RadioField';
export { default as RadioFieldValidationState } from './stories/RadioFieldValidationState';
export { default as RadioFieldHelperText } from './stories/RadioFieldHelperText';
export { default as RadioFieldDisabled } from './stories/RadioFieldDisabled';
export { default as RadioFieldItem } from './stories/RadioFieldItem';
export { default as RadioFieldList } from './stories/RadioFieldList';
export { default as Props } from './stories/RadioFieldProps';
