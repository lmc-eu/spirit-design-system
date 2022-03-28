import React from 'react';
import Link from './Link';
import { SpiritLinkProps } from '../../types';

export default {
  title: 'Typography/Link',
  argTypes: {
    children: 'Some long Link',
    href: '#',
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'inverted'],
      },
    },
    isDisabled: {
      control: 'boolean',
    },
    isUnderlined: {
      control: 'boolean',
    },
  },
};

const Template = (args: SpiritLinkProps) => <Link {...args} href="/" />;

export const PrimaryLink = Template.bind({});
PrimaryLink.args = {
  children: 'Primary Link',
  color: 'primary',
};

export const SecondaryLink = Template.bind({});
SecondaryLink.args = {
  children: 'Secondary Link',
  color: 'secondary',
};

export const InvertedLink = Template.bind({});
InvertedLink.args = {
  children: 'Inverted Link',
  color: 'inverted',
};
