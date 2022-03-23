import React from 'react';
import CheckboxField from './CheckboxField';
import { SpiritCheckboxFieldProps } from '../../types';

export default {
  title: 'Components/CheckboxField',
  argTypes: {
    id: 'default',
    isDisabled: {
      control: 'boolean',
    },
    isRequired: {
      control: 'boolean',
    },
    isChecked: {
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
  isChecked: true,
};

export const RequiredCheckboxField = Template.bind({});
RequiredCheckboxField.args = {
  label: 'Label',
  message: 'Message',
  isRequired: true,
};

export const DisabledCheckboxField = Template.bind({});
DisabledCheckboxField.args = {
  label: 'Label',
  message: 'Message',
  isDisabled: true,
};

export const ErroredCheckboxField = Template.bind({});
ErroredCheckboxField.args = {
  label: 'Label',
  message: 'Message',
  validationState: 'error',
};
