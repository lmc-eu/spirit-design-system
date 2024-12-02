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
    children: (
      <NavigationLink href="/" isSelected>
        Home
      </NavigationLink>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof NavigationItem>;

export const Playground: Story = {
  name: 'NavigationItem',
};
