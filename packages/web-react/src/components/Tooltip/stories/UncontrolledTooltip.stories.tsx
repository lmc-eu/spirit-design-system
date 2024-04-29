import React, { useEffect, useRef } from 'react';
import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { Placements } from '../../../constants';
import { SpiritTooltipProps } from '../../../types';
import { Button } from '../..';
import ReadMe from '../README.md';
import { UncontrolledTooltip, TooltipPopover, TooltipTrigger } from '..';

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
      control: 'object',
    },
    enableFlipping: { control: 'boolean' },
    enableFlippingCrossAxis: { control: 'boolean' },
    enableShifting: { control: 'boolean' },
    enableSizing: { control: 'boolean' },
    id: { control: 'text' },
    isDismissible: { control: 'boolean' },
    isFocusableOnHover: { control: 'boolean' },
    isOpen: { control: 'boolean' },
    placement: {
      control: 'select',
      options: Object.values(Placements),
      table: { defaultValue: { summary: 'bottom' } },
    },
    trigger: {
      control: 'select',
      options: ['click, hover', 'hover', 'click'],
      table: { defaultValue: { summary: 'click, hover' } },
    },
  },
  args: {
    children: (
      <>
        This long tooltip is flipping, resizing and shifting to stay in the viewport. Also its arrow is always trying to
        point to the center of the trigger.
      </>
    ),
    enableFlipping: true,
    enableFlippingCrossAxis: true,
    enableShifting: true,
    enableSizing: true,
    id: 'TooltipExample',
    isDismissible: false,
    isFocusableOnHover: false,
    isOpen: false,
    placement: 'bottom',
    trigger: ['click', 'hover'],
  },
};

export default meta;
type Story = StoryObj<typeof UncontrolledTooltip>;

const UncontrolledTooltipWithHooks = (args: Omit<SpiritTooltipProps, 'onToggle'>) => {
  const { children } = args;

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
      className="bg-cover"
      style={{ width: '40rem', maxWidth: '100%', height: '30rem', overflow: 'auto' }}
      ref={viewportRef}
    >
      <div
        style={{ position: 'relative', width: '300%', height: '90rem', paddingBlock: '44rem', textAlign: 'center' }}
        ref={contentRef}
      >
        <UncontrolledTooltip {...args}>
          <TooltipTrigger elementType={Button}>Button as anchor</TooltipTrigger>
          <TooltipPopover>{children}</TooltipPopover>
        </UncontrolledTooltip>
      </div>
    </div>
  );
};

export const UncontrolledTooltipPlayground: Story = {
  name: 'UncontrolledTooltip',
  render: (args) => <UncontrolledTooltipWithHooks {...args} />,
};
