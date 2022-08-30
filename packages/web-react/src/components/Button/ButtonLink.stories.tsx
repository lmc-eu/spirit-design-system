import React from 'react';
import { SpiritButtonProps } from '../../types';
import ButtonLink from './ButtonLink';

export default {
  title: 'Components/ButtonLink',
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'tertiary', 'inverted', 'danger'],
      control: { type: 'select' },
    },
    href: { control: 'text' },
    target: {
      options: ['_blank', '_self', '_parent', '_top'],
      control: { type: 'select' },
    },
    isDisabled: { control: 'boolean' },
    isBlock: { control: 'boolean' },
    ariaLabel: { control: 'text' },
    children: {
      control: 'text',
    },
    size: {
      options: ['medium', 'large'],
      control: { type: 'select' },
    },
  },
};

const Template = (args: SpiritButtonProps<'a'>) => <ButtonLink {...args} />;

export const ExampleButton = Template.bind({});
ExampleButton.args = {
  color: 'primary',
  href: '#',
  children: 'Button',
  isDisabled: false,
  isBlock: false,
  size: 'medium',
};
