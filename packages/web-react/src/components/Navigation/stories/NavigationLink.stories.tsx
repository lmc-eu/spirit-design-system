import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import NavigationLink from '../NavigationLink';
import ReadMe from '../README.md';

const meta: Meta<typeof NavigationLink> = {
  title: 'Components/Navigation',
  component: NavigationLink,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    isDisabled: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    isSelected: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    children: 'Link',
    isDisabled: false,
    isSelected: false,
  },
};

export default meta;
type Story = StoryObj<typeof NavigationLink>;

export const NavigationLinkPlayground: Story = {
  name: 'NavigationLink',
};
