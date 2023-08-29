import React from 'react';
import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { Grid } from './Grid';
import ReadMe from './README.md';

const gridColumnsArray = [1, 2, 3, 4, 5, 6, 12, undefined];

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
      control: 'select',
      options: gridColumnsArray,
    },
    desktop: {
      control: 'select',
      options: gridColumnsArray,
    },
    elementType: {
      control: 'text',
      table: {
        defaultValue: { summary: 'div' },
      },
    },
    tablet: {
      control: 'select',
      options: gridColumnsArray,
    },
  },
  args: {
    children: (
      <>
        {[...Array(12)].map((_, index) => {
          const key = `item-${index}`;

          return (
            <div key={key} className="docs-Box">
              Item
            </div>
          );
        })}
      </>
    ),
    cols: 12,
    desktop: 12,
    elementType: 'div',
    tablet: 12,
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Playground: Story = {
  name: 'Grid',
};
