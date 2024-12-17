import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import NavigationAction from '../NavigationAction';
import ReadMe from '../README.md';

const meta: Meta<typeof NavigationAction> = {
  title: 'Components/Navigation',
  component: NavigationAction,
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
type Story = StoryObj<typeof NavigationAction>;

export const NavigationActionPlayground: Story = {
  name: 'NavigationAction',
};
