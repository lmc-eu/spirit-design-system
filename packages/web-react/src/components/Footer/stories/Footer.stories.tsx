import { Markdown } from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { BackgroundColors, TextAlignments } from '../../../constants';
import { Container } from '../../Container';
import { PADDING_BOTTOM, PADDING_TOP } from '../constants';
import Footer from '../Footer';
import ReadMe from '../README.md';

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
    backgroundColor: {
      control: 'select',
      options: [...Object.values(BackgroundColors)],
      table: {
        defaultValue: { summary: BackgroundColors.SECONDARY },
      },
    },
    paddingBottom: {
      control: 'text',
      table: {
        defaultValue: { summary: 'space-1200' },
      },
    },
    paddingTop: {
      control: 'text',
      table: {
        defaultValue: { summary: 'space-1400' },
      },
    },
    textAlignment: {
      control: 'select',
      options: [...Object.values(TextAlignments), undefined],
      table: {
        defaultValue: { summary: undefined },
      },
    },
  },
  args: {
    children: <Container>Footer content</Container>,
    backgroundColor: BackgroundColors.SECONDARY,
    paddingBottom: PADDING_BOTTOM,
    paddingTop: PADDING_TOP,
    textAlignment: TextAlignments.LEFT,
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Playground: Story = {
  name: 'Footer',
  render: (args) => <Footer {...args} />,
};
