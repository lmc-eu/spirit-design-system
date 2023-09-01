import React from 'react';
import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '..';
import { TooltipWrapper, UncontrolledTooltip } from '.';
import ReadMe from './README.md';

const meta: Meta<typeof UncontrolledTooltip> = {
  title: 'Components/Tooltip',
  component: UncontrolledTooltip,
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
type Story = StoryObj<typeof UncontrolledTooltip>;

export const UncontrolledTooltipPlayground: Story = {
  name: 'UncontrolledTooltip',
  render: (args) => (
    <TooltipWrapper>
      <Button UNSAFE_className="TooltipTarget">Tooltip</Button>
      <UncontrolledTooltip {...args} />
    </TooltipWrapper>
  ),
};
