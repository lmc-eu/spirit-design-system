import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ReadMe from '../README.md';
import { UNSTABLE_Divider } from '..';

const meta: Meta<typeof UNSTABLE_Divider> = {
  title: 'Components/UNSTABLE_Divider',
  component: UNSTABLE_Divider,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof UNSTABLE_Divider>;

export const Playground: Story = {
  name: 'UNSTABLE_Divider',
};
