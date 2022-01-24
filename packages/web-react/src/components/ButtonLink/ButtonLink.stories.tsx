import React from 'react';
import ButtonLink, { ButtonLinkProps } from './ButtonLink';

export default {
  title: 'Components/ButtonLink',
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
    },
    href: { control: 'text' },
    target: {
      options: ['_blank', '_self', '_parent', '_top'],
      control: { type: 'select' },
    },
    disabled: { control: 'boolean' },
    block: { control: 'boolean' },
    ariaLabel: { control: 'text' },
    children: {
      control: 'text',
    },
  },
};

const Template = (args: ButtonLinkProps) => <ButtonLink {...args} />;

export const ExampleButton = Template.bind({});
ExampleButton.args = {
  color: 'primary',
  href: '#',
  children: 'Button',
  disabled: false,
  block: false,
};
