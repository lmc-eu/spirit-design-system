import React from 'react';
import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '..';
import { Tooltip, TooltipWrapper } from '.';
import ReadMe from './README.md';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    closeLabel: {
      control: 'text',
      table: {
        defaultValue: { summary: 'Close' },
      },
    },
    isDismissible: {
      control: 'boolean',
    },
    open: {
      control: 'boolean',
    },
    placement: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left', 'off'],
      table: {
        defaultValue: { summary: 'bottom' },
      },
    },
  },
  args: {
    children: 'Hello there!',
    closeLabel: 'Close',
    isDismissible: false,
    placement: 'bottom',
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Playground: Story = {
  name: 'Tooltip',
  render: (args) => (
    <TooltipWrapper>
      <Button UNSAFE_className="TooltipTarget">Tooltip</Button>
      <Tooltip {...args} />
    </TooltipWrapper>
  ),
};
