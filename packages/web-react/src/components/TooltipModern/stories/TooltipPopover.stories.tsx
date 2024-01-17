import React from 'react';
import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import ReadMe from '../../Tooltip/README.md';
import { Button } from '../..';
import { TooltipModern, TooltipPopover, TooltipTrigger } from '../../Tooltip';

const meta: Meta<typeof TooltipPopover> = {
  title: 'Components/TooltipModern',
  component: TooltipPopover,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'object',
    },
  },
  args: {
    children: <>Tooltip popover</>,
  },
};

export default meta;
type Story = StoryObj<typeof TooltipPopover>;

export const TooltipPopoverPlayground: Story = {
  name: 'TooltipPopover',
  render: (args) => (
    <TooltipModern id="TooltipModernExample" isOpen onToggle={() => {}}>
      <TooltipTrigger elementType={Button}>Button as anchor</TooltipTrigger>
      <TooltipPopover>{args.children}</TooltipPopover>
    </TooltipModern>
  ),
};
