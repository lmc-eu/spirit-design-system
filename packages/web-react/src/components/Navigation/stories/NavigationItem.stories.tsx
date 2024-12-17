import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import NavigationItem from '../NavigationItem';
import NavigationLink from '../NavigationLink';
import ReadMe from '../README.md';

const meta: Meta<typeof NavigationItem> = {
  title: 'Components/Navigation',
  component: NavigationItem,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  args: {
    children: <NavigationLink href="/">Link</NavigationLink>,
  },
};

export default meta;
type Story = StoryObj<typeof NavigationItem>;

export const NavigationItemPlayground: Story = {
  name: 'NavigationItem',
  render: (args) => (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      <NavigationItem {...args} />
    </ul>
  ),
};
