import React from 'react';
import Alert from './Alert';
import { SpiritAlertProps } from '../../types';

export default {
  title: 'Components/Alert',
  argTypes: {
    children: {
      control: 'text',
    },
    color: {
      control: {
        type: 'select',
        options: ['success', 'danger'],
      },
    },
  },
};

const Template = (args: SpiritAlertProps) => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
  children: 'Alert',
};

export const Danger = Template.bind({});
Danger.args = {
  ...Success.args,
  color: 'danger',
};
