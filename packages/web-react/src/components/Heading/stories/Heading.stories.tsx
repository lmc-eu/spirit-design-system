import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Emphasis, SizesExtended } from '../../../constants';
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
        defaultValue: { summary: undefined },
      },
    },
    size: {
      control: 'select',
      options: [...Object.values(SizesExtended)],
      table: {
        defaultValue: { summary: SizesExtended.MEDIUM },
      },
    },
  },
  args: {
    children: 'Heading',
    elementType: 'h1',
    emphasis: undefined,
    size: SizesExtended.MEDIUM,
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Playground: Story = {
  name: 'Heading',
};
