import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AlignmentYExtended } from '../../../constants';
import NavigationAction from '../NavigationAction';
import NavigationItem from '../NavigationItem';
import ReadMe from '../README.md';

const meta: Meta<typeof NavigationItem> = {
  title: 'Components/Navigation',
  component: NavigationItem,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    alignmentY: {
      control: 'select',
      options: [AlignmentYExtended.CENTER, AlignmentYExtended.STRETCH],
      table: {
        defaultValue: { summary: AlignmentYExtended.CENTER },
      },
    },
  },
  args: {
    alignmentY: AlignmentYExtended.CENTER,
    children: <NavigationAction href="/">Link</NavigationAction>,
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
