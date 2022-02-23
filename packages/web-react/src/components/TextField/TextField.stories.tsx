import React from 'react';
import TextField from './TextField';
import { SpiritTextFieldProps } from '../../types';

export default {
  title: 'Components/TextField',
  argTypes: {
    id: 'default',
    placeholder: 'Placeholder',
    disabled: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    isLabelHidden: {
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

const Template = (args: SpiritTextFieldProps) => <TextField {...args} />;

export const DefaultTextField = Template.bind({});
DefaultTextField.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  message: 'Message',
};

export const RequiredTextField = Template.bind({});
RequiredTextField.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  message: 'Message',
  required: true,
};

export const DisabledTextField = Template.bind({});
DisabledTextField.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  message: 'Message',
  disabled: true,
};

export const ErroredTextField = Template.bind({});
ErroredTextField.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  message: 'Message',
  validationState: 'error',
};

export const HiddenLabelTextField = Template.bind({});
HiddenLabelTextField.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  message: 'Message',
  isLabelHidden: true,
};
