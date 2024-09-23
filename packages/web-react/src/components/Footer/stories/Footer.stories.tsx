import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Container } from '../../Container';
import ReadMe from '../README.md';
import { Footer } from '..';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
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
    children: <Container>Footer content</Container>,
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Playground: Story = {
  name: 'Footer',
  render: (args) => <Footer UNSAFE_className="bg-cover pt-1000 pb-1000" {...args} />,
};
