import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Navigation from '../Navigation';
import NavigationAction from '../NavigationAction';
import NavigationItem from '../NavigationItem';
import ReadMe from '../README.md';

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    children: {
      control: 'object',
    },
  },
  args: {
    children: (
      <>
        <NavigationItem>
          <NavigationAction href="#" aria-current="page" isSelected>
            Home
          </NavigationAction>
        </NavigationItem>
        <NavigationItem>
          <NavigationAction href="#">Not Home</NavigationAction>
        </NavigationItem>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Playground: Story = {
  name: 'Navigation',
};
