import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import SegmentedControlItem from '../SegmentedControlItem';

const meta: Meta<typeof SegmentedControlItem> = {
  title: 'Components/SegmentedControl',
  component: SegmentedControlItem,
  argTypes: {
    children: {
      control: 'text',
    },
    isDefaultSelected: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    value: {
      control: 'text',
    },
  },
  args: {
    children: 'Item label',
    isDefaultSelected: false,
    isDisabled: false,
    value: 'value-1',
  },
};

export default meta;
type Story = StoryObj<typeof SegmentedControlItem>;

export const ItemPlayground: Story = {
  name: 'SegmentedControlItem',
  render: (args) => <SegmentedControlItem {...args} />,
};
