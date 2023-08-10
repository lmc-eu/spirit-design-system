import { ComponentMeta } from '@storybook/react';
import argTypes from './stories/argTypes';
import Select from './Select';

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: 'The Select component serves the user to select one option from several defined options',
      },
    },
  },
  argTypes,
} as ComponentMeta<typeof Select>;

export { default as Select } from './stories/Select';
export { default as SelectDisabled } from './stories/SelectDisabled';
export { default as SelectFluid } from './stories/SelectFluid';
export { default as SelectHelperText } from './stories/SelectHelperText';
export { default as SelectLabelHidden } from './stories/SelectLabelHidden';
export { default as SelectValidationState } from './stories/SelectValidationState';
