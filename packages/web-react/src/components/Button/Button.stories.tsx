import React from 'react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
    },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    type: 'button',
  },
};

const Template = (args: ButtonProps) => <Button {...args} />;

export const ExampleButton = Template.bind({});
ExampleButton.args = {
  color: 'primary',
  label: 'Button',
};
