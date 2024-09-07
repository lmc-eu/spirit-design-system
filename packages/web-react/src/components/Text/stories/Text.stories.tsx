import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SizesExtended } from '../../../constants';
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
      options: ['italic', 'bold', 'semibold', undefined],
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
    children: 'Text',
    elementType: 'p',
    emphasis: undefined,
    size: SizesExtended.MEDIUM,
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Playground: Story = {
  name: 'Text',
};
