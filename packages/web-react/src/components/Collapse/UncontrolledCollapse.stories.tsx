import React from 'react';
import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import content from './stories/content';
import ReadMe from './README.md';
import { UncontrolledCollapse } from '.';

const meta: Meta<typeof UncontrolledCollapse> = {
  title: 'Components/Collapse',
  component: UncontrolledCollapse,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    collapsibleToBreakpoint: {
      control: 'select',
      options: ['mobile', 'tablet', 'desktop', undefined],
      table: {
        defaultValue: { summary: undefined },
      },
    },
    elementType: {
      control: 'text',
      table: {
        defaultValue: { summary: 'div' },
      },
    },
    hideOnCollapse: {
      control: 'boolean',
    },
    id: {
      control: 'text',
    },
    isOpen: {
      control: 'boolean',
    },
    transitionDuration: {
      control: 'number',
      table: {
        defaultValue: { summary: 250 },
      },
    },
  },
  args: {
    elementType: 'div',
    id: 'collapseExample',
    isOpen: false,
    transitionDuration: 250,
  },
};

export default meta;
type Story = StoryObj<typeof UncontrolledCollapse>;

export const UncontrolledCollapsePlayground: Story = {
  name: 'UncontrolledCollapse',
  render: (args) => (
    <UncontrolledCollapse
      {...args}
      renderTrigger={({ isOpen, ...restProps }) => (
        <Button {...restProps}>Collapse Trigger ({isOpen ? 'Open' : 'Closed'})</Button>
      )}
    >
      {content}
    </UncontrolledCollapse>
  ),
};
