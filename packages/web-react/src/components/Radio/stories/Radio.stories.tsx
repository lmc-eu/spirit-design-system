import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ValidationStates } from '../../../constants';
import ReadMe from '../README.md';
import { Radio } from '..';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    autoComplete: {
      control: 'text',
    },
    helperText: {
      control: 'text',
    },
    id: {
      control: 'text',
    },
    isDisabled: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    isChecked: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    isItem: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    isLabelHidden: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
    validationState: {
      control: 'select',
      options: [...Object.values(ValidationStates), undefined],
      table: {
        defaultValue: { summary: undefined },
      },
    },
    value: {
      control: 'text',
    },
  },
  args: {
    autoComplete: 'off',
    helperText: 'Helper text',
    id: 'Radio',
    isDisabled: false,
    isChecked: true,
    isItem: false,
    isLabelHidden: false,
    label: 'Label',
    name: 'Radio',
    validationState: undefined,
    value: 'Radio',
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Playground: Story = {
  name: 'Radio',
};
