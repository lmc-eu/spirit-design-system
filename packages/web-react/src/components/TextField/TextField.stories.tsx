import React from 'react';
import TextField from './TextField';
import { SpiritTextFieldProps } from '../../types';

export default {
  title: 'Components/TextField',
  argTypes: {
    id: 'default',
    placeholder: 'Placeholder',
    type: {
      control: {
        type: 'select',
        options: ['text', 'password', 'email'],
      },
    },
    isDisabled: {
      control: 'boolean',
    },
    isRequired: {
      control: 'boolean',
    },
    isLabelHidden: {
      control: 'boolean',
    },
    isFluid: {
      control: 'boolean',
    },
    validationState: {
      control: {
        type: 'select',
        options: ['success', 'warning', 'error'],
      },
    },
    label: 'Label',
    message: 'Message',
  },
};

export const Template = (args: SpiritTextFieldProps) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  placeholder: 'Placeholder',
  label: 'Label',
  message: 'Message',
};

export const Required = Template.bind({});
Required.args = {
  ...Default.args,
  isRequired: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  isDisabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  validationState: 'error',
};

export const HiddenLabel = Template.bind({});
HiddenLabel.args = {
  ...Default.args,
  isLabelHidden: true,
};

export const Fluid = Template.bind({});
Disabled.args = {
  ...Default.args,
  isFluid: true,
};
