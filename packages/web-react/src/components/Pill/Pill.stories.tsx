import React from 'react';
import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { ActionColors, EmotionColors } from '../../constants';
import { Pill } from './Pill';
import ReadMe from './README.md?raw';

const meta: Meta<typeof Pill> = {
  title: 'Components/Pill',
  component: Pill,
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
      options: [...Object.values(ActionColors), ...Object.values(EmotionColors), 'selected', 'unselected'],
      table: {
        defaultValue: { summary: 'selected' },
      },
    },
    elementType: {
      control: 'text',
      table: {
        defaultValue: { summary: 'span' },
      },
    },
  },
  args: {
    children: '3',
    color: 'selected',
    elementType: 'span',
  },
};

export default meta;
type Story = StoryObj<typeof Pill>;

export const Playground: Story = {
  name: 'Pill',
};
