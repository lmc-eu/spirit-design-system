import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import { SizesExtended } from '../../../constants';
import ReadMe from '../README.md';
import { Container } from '..';

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    children: {
      control: 'object',
    },
    isFluid: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: 'select',
      options: [...Object.values(SizesExtended)],
      table: {
        defaultValue: { summary: SizesExtended.XLARGE },
      },
    },
  },
  args: {
    children: <DocsBox>Container</DocsBox>,
    isFluid: false,
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Playground: Story = {
  name: 'Container',
};
