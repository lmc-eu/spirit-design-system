import React, { useState } from 'react';
import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { SpiritTooltipModernProps } from '../../../types';
import ReadMe from '../../Tooltip/README.md';
import { Button } from '../..';
import { TooltipModern, TooltipTrigger, TooltipPopover } from '../../Tooltip';

const Placements = [
  'top',
  'bottom',
  'left',
  'right',
  'left-end',
  'left-start',
  'right-end',
  'right-start',
  'top-end',
  'top-start',
  'bottom-end',
  'bottom-start',
];

const meta: Meta<typeof TooltipModern> = {
  title: 'Components/TooltipModern',
  component: TooltipModern,
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
    id: {
      control: 'text',
    },
    placement: {
      control: 'select',
      options: Object.values(Placements),
      table: {
        defaultValue: { summary: 'bottom' },
      },
    },
  },
  args: {
    children: <>TooltipPopover</>,
    id: 'TooltipModernExample',
    enableFlipping: true,
    enableShifting: true,
    enableSizing: true,
    enableFlippingCrossAxis: true,
    placement: 'bottom',
    flipFallbackPlacements: ['bottom', 'left', 'right', 'top'],
  },
};

export default meta;
type Story = StoryObj<typeof TooltipModern>;

const TooltipModernWithHooks = (args: SpiritTooltipModernProps) => {
  const { children, isOpen } = args;
  const [isTooltipOpen, setIsTooltipOpen] = useState(true);
  const onTooltipToggle = () => setIsTooltipOpen(!isTooltipOpen);

  return (
    <div className="spirit-feature-tooltip-enable-data-placement">
      <TooltipModern {...args} isOpen={isOpen || isTooltipOpen} onToggle={onTooltipToggle}>
        <TooltipTrigger elementType={Button}>Button as anchor</TooltipTrigger>
        <TooltipPopover>{children}</TooltipPopover>
      </TooltipModern>
    </div>
  );
};

export const TooltipModernPlayground: Story = {
  name: 'TooltipModern',
  render: (args) => <TooltipModernWithHooks {...args} />,
};
