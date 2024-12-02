import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Navigation from '../Navigation';
import NavigationItem from '../NavigationItem';
import NavigationLink from '../NavigationLink';
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
          <NavigationLink href="#" aria-current="page" isSelected>
            Home
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="#">Not Home</NavigationLink>
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
