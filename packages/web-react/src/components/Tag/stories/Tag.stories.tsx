import React from 'react';
import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { EmotionColors, SizesExtended } from '../../../constants';
import ReadMe from '../README.md';
import { Tag } from '..';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    children: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: [...Object.values(EmotionColors), 'neutral'],
      table: {
        defaultValue: { summary: 'neutral' },
      },
    },
    elementType: {
      control: 'text',
      table: {
        defaultValue: { summary: 'span' },
      },
    },
    isSubtle: {
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
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
    children: 'Tag',
    color: 'neutral',
    elementType: 'span',
    isSubtle: false,
    size: SizesExtended.MEDIUM,
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Playground: Story = {
  name: 'Tag',
};
