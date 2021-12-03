import React from 'react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
    },
    onClick: { action: 'onClick' },
    type: 'button',
    disabled: { control: 'boolean' },
    block: { control: 'boolean' },
    ariaLabel: { control: 'text' },
    children: {
      control: 'text',
    },
  },
};

const Template = (args: ButtonProps) => <Button {...args} />;

export const ExampleButton = Template.bind({});
ExampleButton.args = {
  color: 'primary',
  children: 'Button',
  disabled: false,
  block: false,
};
