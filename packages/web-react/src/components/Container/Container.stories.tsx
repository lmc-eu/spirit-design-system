import React from 'react';
import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { Container } from './Container';
import ReadMe from './README.md';

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    children: {
      control: 'object',
    },
  },
  args: {
    children: <div className="docs-Box">Container</div>,
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Playground: Story = {
  name: 'Container',
};
