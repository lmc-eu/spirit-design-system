import React from 'react';
import { SpiritButtonProps } from '../../types';
import Button from './Button';

export default {
  title: 'Components/Button',
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'tertiary', 'inverted', 'danger'],
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

const Template = (args: SpiritButtonProps<'button'>) => <Button {...args} />;

export const ExampleButton = Template.bind({});
ExampleButton.args = {
  color: 'primary',
  children: 'Button',
  disabled: false,
  block: false,
};
