import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AlignmentX } from '../../../constants';
import { Button } from '../../Button';
import ReadMe from '../README.md';
import { ActionGroup } from '..';

const meta: Meta<typeof ActionGroup> = {
  title: 'Components/ActionGroup',
  component: ActionGroup,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    alignmentX: {
      control: 'select',
      options: [undefined, ...Object.values(AlignmentX)],
      table: {
        defaultValue: { summary: AlignmentX.LEFT },
      },
    },
    direction: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      table: {
        defaultValue: { summary: 'row' },
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
    alignmentX: AlignmentX.LEFT,
    direction: 'row',
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
type Story = StoryObj<typeof ActionGroup>;

export const Playground: Story = {
  name: 'ActionGroup',
  render: (args) => (
    <ActionGroup {...args}>
      <Button color="primary">Primary Action</Button>
      <Button color="secondary">Secondary Action</Button>
      <Button color="tertiary">Tertiary Action</Button>
    </ActionGroup>
  ),
};
