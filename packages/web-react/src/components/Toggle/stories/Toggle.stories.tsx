import { Markdown } from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ValidationStates } from '../../../constants';
import ReadMe from '../README.md';
import Toggle from '../Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
    controls: { exclude: ['hasValidationStateIcon'] },
  },
  argTypes: {
    validationState: {
      control: 'select',
      options: [...Object.values(ValidationStates), undefined],
      table: {
        defaultValue: { summary: undefined },
      },
    },
    hasValidationIcon: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    hasIndicators: false,
    hasValidationIcon: false,
    helperText: '',
    id: 'toggle',
    isRequired: false,
    isDisabled: false,
    isFluid: false,
    isChecked: false,
    label: 'Toggle Label',
    validationState: undefined,
    validationText: '',
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Playground: Story = {
  name: 'Toggle',
};
