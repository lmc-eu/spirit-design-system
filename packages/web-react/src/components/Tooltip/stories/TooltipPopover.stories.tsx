import React from 'react';
import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import ReadMe from '../README.md';
import { Button } from '../..';
import { Tooltip, TooltipPopover, TooltipTrigger } from '..';

const meta: Meta<typeof TooltipPopover> = {
  title: 'Components/Tooltip',
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
    <Tooltip id="TooltipExample" isOpen onToggle={() => {}}>
      <TooltipTrigger elementType={Button}>Button as anchor</TooltipTrigger>
      <TooltipPopover>{args.children}</TooltipPopover>
    </Tooltip>
  ),
};
