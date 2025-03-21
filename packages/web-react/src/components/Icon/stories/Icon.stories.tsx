import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ReadMe from '../README.md';
import { Icon } from '..';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    ariaHidden: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    boxSize: {
      control: 'object',
      table: {
        defaultValue: { summary: '24' },
      },
    },
    name: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
  },
  args: {
    ariaHidden: true,
    boxSize: { mobile: 24, tablet: 24, desktop: 24 },
    name: 'warning',
    title: 'Warning',
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Playground: Story = {
  name: 'Icon',
};
