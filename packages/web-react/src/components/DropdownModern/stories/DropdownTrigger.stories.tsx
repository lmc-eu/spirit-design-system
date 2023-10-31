import React from 'react';
import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import ReadMe from '../../Dropdown/README.md';
import { DropdownTrigger } from '../../Dropdown';
import { Button } from '../../Button';

const meta: Meta<typeof DropdownTrigger> = {
  title: 'Components/DropdownModern',
  component: DropdownTrigger,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'object',
      description: 'The content to display in the component.',
    },
    elementType: {
      control: 'object',
      table: {
        defaultValue: { summary: Button },
      },
    },
  },
  args: {
    children: 'Hello World',
    elementType: Button,
  },
};

export default meta;
type Story = StoryObj<typeof DropdownTrigger>;

export const DropdownTriggerPlayground: Story = {
  name: 'DropdownTrigger',
  render: (args) => <DropdownTrigger elementType={args.elementType}>{args.children}</DropdownTrigger>,
};
