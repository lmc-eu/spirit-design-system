import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import { AlignmentXExtended, AlignmentYExtended } from '../../../constants';
import ReadMe from '../README.md';
import { Flex } from '..';

const meta: Meta<typeof Flex> = {
  title: 'Components/Flex',
  component: Flex,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    alignmentX: {
      control: 'select',
      options: [undefined, ...Object.values(AlignmentXExtended)],
      table: {
        defaultValue: { summary: undefined },
      },
    },
    alignmentY: {
      control: 'select',
      options: [undefined, ...Object.values(AlignmentYExtended)],
      table: {
        defaultValue: { summary: undefined },
      },
    },
    direction: {
      control: 'select',
      options: ['row', 'column'],
      table: {
        defaultValue: { summary: 'row' },
      },
    },
    elementType: {
      control: 'text',
      table: {
        defaultValue: { summary: 'div' },
      },
    },
    isWrapping: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
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
    alignmentX: undefined,
    alignmentY: undefined,
    direction: 'row',
    elementType: 'div',
    isWrapping: false,
    spacing: {
      mobile: 'space-600',
      tablet: 'space-800',
      desktop: 'space-1000',
    },
    spacingX: {
      mobile: 'space-600',
      tablet: 'space-800',
      desktop: 'space-1000',
    },
    spacingY: {
      mobile: 'space-600',
      tablet: 'space-800',
      desktop: 'space-1000',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Playground: Story = {
  name: 'Flex',
  render: (args) => (
    <Flex {...args}>
      {[...Array(12)].map((_, index) => {
        const key = `item-${index}`;

        return index === 2 ? (
          <DocsBox key={key} UNSAFE_className="typography-heading-small-text">
            Item {index + 1} has bigger font size
          </DocsBox>
        ) : (
          <DocsBox key={key} size="small">
            Item {index + 1}
            {index === 1 && (
              <>
                <br /> is taller
              </>
            )}
          </DocsBox>
        );
      })}
    </Flex>
  ),
};
