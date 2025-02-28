import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AlignmentX, Emphasis, SizesExtended, TextColors } from '../../../constants';
import ReadMe from '../README.md';
import { Heading } from '..';

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    children: {
      control: 'text',
    },
    elementType: {
      control: 'text',
    },
    emphasis: {
      control: 'select',
      options: [...Object.values(Emphasis), undefined],
      table: {
        defaultValue: { summary: Emphasis.BOLD },
      },
    },
    size: {
      control: 'select',
      options: [...Object.values(SizesExtended)],
      table: {
        defaultValue: { summary: SizesExtended.MEDIUM },
      },
    },
    textAlignment: {
      control: 'select',
      options: [...Object.values(AlignmentX)],
      table: {
        defaultValue: { summary: AlignmentX.LEFT },
      },
    },
    textColor: {
      control: 'select',
      options: [...Object.values(TextColors), undefined],
      table: {
        defaultValue: { summary: undefined },
      },
    },
  },
  args: {
    children: 'Heading',
    elementType: 'h1',
    emphasis: Emphasis.BOLD,
    size: SizesExtended.MEDIUM,
    textAlignment: AlignmentX.LEFT,
    textColor: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Playground: Story = {
  name: 'Heading',
};
