import React, { useEffect, useRef, useState } from 'react';
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
    isFocusableOnHover: {
      control: 'boolean',
    },
    trigger: {
      control: 'select',
      options: ['click, hover', 'hover', 'click'],
      table: {
        defaultValue: { summary: 'click, hover' },
      },
    },
    isOpen: {
      control: 'boolean',
    },
  },
  args: {
    children: (
      <>
        This long tooltip is flipping, resizing and shifting to stay in the viewport. Also its arrow is always trying to
        point to the center of the trigger.
      </>
    ),
    isOpen: false,
    id: 'TooltipModernExample',
    enableFlipping: true,
    enableShifting: true,
    enableSizing: true,
    enableFlippingCrossAxis: true,
    trigger: ['click', 'hover'],
    placement: 'bottom',
    isFocusableOnHover: false,
    flipFallbackPlacements: ['bottom', 'left', 'right', 'top'],
  },
};

export default meta;
type Story = StoryObj<typeof TooltipModern>;

const TooltipModernWithHooks = (args: SpiritTooltipModernProps) => {
  const { children, isOpen } = args;
  const [isTooltipOpen, setIsTooltipOpen] = useState(isOpen);

  const viewportRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    const content = contentRef.current;
    if (viewport && content) {
      viewport.scrollLeft = (content.offsetWidth - viewport.offsetWidth) / 2;
      viewport.scrollTop = (content.offsetHeight - viewport.offsetHeight) / 2;
    }
  }, []);

  return (
    <div
      className="bg-cover spirit-feature-tooltip-enable-data-placement"
      style={{ width: '40rem', maxWidth: '100%', height: '30rem', overflow: 'auto' }}
      ref={viewportRef}
    >
      <div
        style={{ position: 'relative', width: '300%', height: '90rem', paddingBlock: '44rem', textAlign: 'center' }}
        ref={contentRef}
      >
        <TooltipModern {...args} isOpen={isOpen || isTooltipOpen} onToggle={setIsTooltipOpen}>
          <TooltipTrigger elementType={Button}>Button as anchor</TooltipTrigger>
          <TooltipPopover>{children}</TooltipPopover>
        </TooltipModern>
      </div>
    </div>
  );
};

export const TooltipModernPlayground: Story = {
  name: 'TooltipModern',
  render: (args) => <TooltipModernWithHooks {...args} />,
};
