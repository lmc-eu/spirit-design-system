import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Container } from '../../Container';
import Box from '../Box';
import ReadMe from '../README.md';

const meta: Meta<typeof Box> = {
  title: 'Components/Box',
  component: Box,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    elementType: {
      control: 'text',
    },
  },
  args: {
    elementType: 'div',
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Playground: Story = {
  name: 'Box',
  render: (args) => (
    <Container>
      <Box {...args}>Content</Box>
    </Container>
  ),
};
