import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Emphasis, SizesExtended, TextColors } from '../../../constants';
import ReadMe from '../README.md';
import { Text } from '..';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
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
        defaultValue: { summary: Emphasis.REGULAR },
      },
    },
    size: {
      control: 'select',
      options: [...Object.values(SizesExtended)],
      table: {
        defaultValue: { summary: SizesExtended.MEDIUM },
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
    children: 'Text',
    elementType: 'p',
    emphasis: Emphasis.REGULAR,
    size: SizesExtended.MEDIUM,
    textColor: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Playground: Story = {
  name: 'Text',
};
