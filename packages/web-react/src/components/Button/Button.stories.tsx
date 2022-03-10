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
    isSquare: { control: 'boolean' },
    ariaLabel: { control: 'text' },
    children: {
      control: 'text',
    },
  },
};

const Template = (args: SpiritButtonProps<'button'>) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  color: 'primary',
  children: 'Button',
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  color: 'secondary',
  children: 'Button',
};

export const TertiaryButton = Template.bind({});
TertiaryButton.args = {
  color: 'tertiary',
  children: 'Button',
};

export const DangerButton = Template.bind({});
DangerButton.args = {
  color: 'danger',
  children: 'Button',
};

export const InvertedButton = Template.bind({});
InvertedButton.args = {
  color: 'inverted',
  children: 'Button',
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  color: 'primary',
  children: 'Button',
  disabled: true,
};

export const BlockButton = Template.bind({});
BlockButton.args = {
  color: 'primary',
  children: 'Button',
  block: true,
};

export const SquareButton = Template.bind({});
SquareButton.args = {
  color: 'primary',
  children: '🚀',
  isSquare: true,
};
