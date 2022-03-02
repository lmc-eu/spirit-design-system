import React from 'react';
import CheckboxField from './CheckboxField';
import { SpiritCheckboxFieldProps } from '../../types';

export default {
  title: 'Components/CheckboxField',
  argTypes: {
    id: 'default',
    disabled: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    validationState: {
      control: {
        type: 'select',
        options: ['error'],
      },
    },
    label: 'Label',
    message: 'Message',
  },
};

const Template = (args: SpiritCheckboxFieldProps) => <CheckboxField {...args} />;

export const DefaultCheckboxField = Template.bind({});
DefaultCheckboxField.args = {
  label: 'Label',
  message: 'Message',
};

export const CheckedCheckboxField = Template.bind({});
DefaultCheckboxField.args = {
  label: 'Label',
  message: 'Message',
  checked: true,
};

export const RequiredCheckboxField = Template.bind({});
RequiredCheckboxField.args = {
  label: 'Label',
  message: 'Message',
  required: true,
};

export const DisabledCheckboxField = Template.bind({});
DisabledCheckboxField.args = {
  label: 'Label',
  message: 'Message',
  disabled: true,
};

export const ErroredCheckboxField = Template.bind({});
ErroredCheckboxField.args = {
  label: 'Label',
  message: 'Message',
  validationState: 'error',
};
