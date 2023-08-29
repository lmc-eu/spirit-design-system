import React from 'react';
import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { SizesExtended } from '../../constants';
import { Text } from './Text';
import ReadMe from './README.md';

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
      options: ['italic', 'bold', undefined],
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
