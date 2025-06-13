import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import { Stack } from '../../Stack';
import {
  DEFAULT_MATRIX_COLS,
  DEFAULT_MATRIX_ITEM_ROWS,
  DEFAULT_MATRIX_ROWS,
  DEFAULT_MATRIX_SPACING_X,
  DEFAULT_MATRIX_SPACING_Y,
} from '../constant';
import Matrix from '../Matrix';
import ReadMe from '../README.md';

const meta: Meta<typeof Matrix> = {
  title: 'Components/Matrix',
  component: Matrix,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    cols: {
      control: 'object',
      table: {
        defaultValue: { summary: DEFAULT_MATRIX_COLS.toString() },
      },
    },
    rows: {
      control: 'object',
      table: {
        defaultValue: { summary: DEFAULT_MATRIX_ROWS.toString() },
      },
    },
    itemRows: {
      control: 'object',
      table: {
        defaultValue: { summary: DEFAULT_MATRIX_ITEM_ROWS.toString() },
      },
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
      table: {
        defaultValue: { summary: DEFAULT_MATRIX_SPACING_X.toString() },
      },
    },
    spacingY: {
      control: 'object',
      table: {
        defaultValue: { summary: DEFAULT_MATRIX_SPACING_Y.toString() },
      },
    },
  },
  args: {
    cols: {
      mobile: DEFAULT_MATRIX_COLS,
      tablet: DEFAULT_MATRIX_COLS,
      desktop: DEFAULT_MATRIX_COLS,
    },
    rows: {
      mobile: DEFAULT_MATRIX_ROWS,
      tablet: DEFAULT_MATRIX_ROWS,
      desktop: DEFAULT_MATRIX_ROWS,
    },
    itemRows: {
      mobile: DEFAULT_MATRIX_ITEM_ROWS,
      tablet: DEFAULT_MATRIX_ITEM_ROWS,
      desktop: DEFAULT_MATRIX_ITEM_ROWS,
    },
    elementType: 'div',
    spacing: undefined,
    spacingX: {
      mobile: DEFAULT_MATRIX_SPACING_X,
      tablet: DEFAULT_MATRIX_SPACING_X,
      desktop: DEFAULT_MATRIX_SPACING_X,
    },
    spacingY: {
      mobile: DEFAULT_MATRIX_SPACING_Y,
      tablet: DEFAULT_MATRIX_SPACING_Y,
      desktop: DEFAULT_MATRIX_SPACING_Y,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Matrix>;

export const Playground: Story = {
  name: 'Matrix',
  render: (args) => {
    const { ...restProps } = args;

    return (
      <Matrix {...restProps}>
        {[...Array(DEFAULT_MATRIX_COLS)].map((_col, colIndex) => {
          const key = `col-${colIndex}`;

          return (
            <Stack key={key} hasSpacing>
              {[...Array(3)].map((_item, itemIndex) => {
                const itemKey = `${key}-item-${itemIndex}`;

                return (
                  <DocsBox key={itemKey}>
                    {`Col ${colIndex + 1} - Item ${itemIndex + 1}`}
                    {(colIndex === 1 && itemIndex === 1) || (colIndex === 2 && itemIndex === 2) ? (
                      <>
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                      </>
                    ) : null}
                  </DocsBox>
                );
              })}
            </Stack>
          );
        })}
      </Matrix>
    );
  },
};
