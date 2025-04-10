import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ReadMe from '../README.md';
import SegmentedControl from '../SegmentedControl';

const meta: Meta<typeof SegmentedControl> = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof SegmentedControl>;

export const Playground: Story = {
  name: 'SegmentedControl',
};
