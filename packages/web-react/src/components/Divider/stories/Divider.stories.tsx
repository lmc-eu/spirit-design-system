import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Divider from '../Divider';
import ReadMe from '../README.md';

const meta: Meta<typeof Divider> = {
  title: 'Experimental/Divider',
  component: Divider,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Playground: Story = {
  name: 'Divider',
};
