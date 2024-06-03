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
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Playground: Story = {
  name: 'Grid',
};
