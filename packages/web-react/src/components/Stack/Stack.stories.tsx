import React from 'react';
import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { Stack } from './Stack';
import ReadMe from './README.md';

const meta: Meta<typeof Stack> = {
  title: 'Components/Stack',
  component: Stack,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    children: {
      control: 'object',
    },
    elementType: {
      control: 'text',
    },
    hasEndDivider: {
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      },
    },
    hasIntermediateDividers: {
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      },
    },
    hasSpacing: {
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      },
    },
    hasStartDivider: {
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      },
    },
  },
  args: {
    children: (
      <>
        {[...Array(3)].map((_, index) => {
          const key = `item-${index}`;

          return (
            <li key={key}>
              <div className="docs-Box">Item</div>
            </li>
          );
        })}
      </>
    ),
    elementType: 'ul',
    hasEndDivider: false,
    hasIntermediateDividers: false,
    hasSpacing: false,
    hasStartDivider: false,
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Playground: Story = {
  name: 'Stack',
};
