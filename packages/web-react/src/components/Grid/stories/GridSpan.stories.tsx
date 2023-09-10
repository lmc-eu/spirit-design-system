import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import DocsBox from '../../../../docs/DocsBox';
import { Grid, GridSpan } from '..';

const gridSpanColumnsArray = [2, 4, 6, 8, 10, 12, undefined];

const meta: Meta<typeof GridSpan> = {
  title: 'Components/Grid',
  component: GridSpan,
  argTypes: {
    children: {
      control: 'object',
    },
    desktop: {
      control: 'select',
      options: gridSpanColumnsArray,
    },
    elementType: {
      control: 'text',
      table: {
        defaultValue: { summary: 'div' },
      },
    },
    over: {
      control: 'select',
      options: gridSpanColumnsArray,
    },
    tablet: {
      control: 'select',
      options: gridSpanColumnsArray,
    },
  },
  args: {
    children: <DocsBox size="small">GridSpan</DocsBox>,
    desktop: 12,
    elementType: 'div',
    over: 12,
    tablet: 12,
  },
};

export default meta;
type Story = StoryObj<typeof GridSpan>;

export const GridSpanPlayground: Story = {
  name: 'GridSpan',
  render: (args) => (
    <Grid>
      <GridSpan {...args} />
    </Grid>
  ),
};
