import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ValidationStates } from '../../../constants';
import ReadMe from '../README.md';
import { Checkbox } from '..';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
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
    isRequired: {
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
    validationText: {
      control: 'object',
      description:
        'The validation text. Only visible if validationState is set. Use a string `"foo"` for single validation text or an array for multiple validation texts `["foo", "bar"]`.',
    },
    value: {
      control: 'text',
    },
  },
  args: {
    autoComplete: 'off',
    helperText: 'Helper text',
    id: 'checkbox',
    isDisabled: false,
    isChecked: true,
    isItem: false,
    isLabelHidden: false,
    isRequired: false,
    label: 'Label',
    name: 'checkbox',
    validationState: undefined,
    validationText: 'Validation text',
    value: 'checkbox',
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Playground: Story = {
  name: 'Checkbox',
};
