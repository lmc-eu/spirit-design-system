import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import ReadMe from '../README.md';
import { Grid } from '..';

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    children: {
      control: 'object',
    },
    cols: {
      control: 'object',
    },
    elementType: {
      control: 'text',
      table: {
        defaultValue: { summary: 'div' },
      },
    },
    spacing: {
      control: 'object',
    },
    spacingX: {
      control: 'object',
    },
    spacingY: {
      control: 'object',
    },
  },
  args: {
    children: (
      <>
        {[...Array(12)].map((_, index) => {
          const key = `item-${index}`;

          return <DocsBox key={key}>Item</DocsBox>;
        })}
      </>
    ),
    cols: {
      mobile: 2,
      tablet: 3,
      desktop: 4,
    },
    elementType: 'div',
    spacing: {
      mobile: 'space-600',
      tablet: 'space-600',
      desktop: 'space-600',
    },
    spacingX: {
      mobile: 'space-600',
      tablet: 'space-600',
      desktop: 'space-600',
    },
    spacingY: {
      mobile: 'space-600',
      tablet: 'space-600',
      desktop: 'space-600',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Playground: Story = {
  name: 'Grid',
};
