import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ValidationStates } from '../../../constants';
import ReadMe from '../README.md';
import { TextArea } from '..';

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    autoComplete: {
      control: 'text',
    },
    autoResizingMaxHeight: {
      control: 'number',
      table: {
        defaultValue: { summary: 400 },
      },
    },
    helperText: {
      control: 'text',
    },
    id: {
      control: 'text',
    },
    isAutoResizing: {
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      },
    },
    isDisabled: {
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      },
    },
    isFluid: {
      control: 'boolean',
      table: {
        defaultValue: { summary: true },
      },
    },
    isLabelHidden: {
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      },
    },
    isRequired: {
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      },
    },
    label: {
      control: 'text',
    },
    maxLength: {
      control: 'number',
    },
    name: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    rows: {
      control: 'number',
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
    autoResizingMaxHeight: 400,
    helperText: 'Helper text',
    id: 'TextArea',
    isAutoResizing: false,
    isDisabled: false,
    isFluid: false,
    isLabelHidden: false,
    isRequired: false,
    label: 'Label',
    name: 'TextArea',
    placeholder: 'Placeholder',
    validationState: undefined,
    validationText: 'Validation text',
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Playground: Story = {
  name: 'TextArea',
};
