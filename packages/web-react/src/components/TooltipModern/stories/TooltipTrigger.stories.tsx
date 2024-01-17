import React from 'react';
import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import ReadMe from '../../Tooltip/README.md';
import { TooltipTrigger } from '../../Tooltip';
import { Button } from '../../Button';

const meta: Meta<typeof TooltipTrigger> = {
  title: 'Components/TooltipModern',
  component: TooltipTrigger,
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
type Story = StoryObj<typeof TooltipTrigger>;

export const TooltipTriggerPlayground: Story = {
  name: 'TooltipTrigger',
  render: (args) => <TooltipTrigger elementType={args.elementType}>{args.children}</TooltipTrigger>,
};
