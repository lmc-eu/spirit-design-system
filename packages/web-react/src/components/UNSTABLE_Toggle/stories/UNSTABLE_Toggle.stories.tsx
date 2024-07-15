import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ValidationStates } from '../../../constants';
import ReadMe from '../README.md';
import UNSTABLE_Toggle from '../UNSTABLE_Toggle';

const meta: Meta<typeof UNSTABLE_Toggle> = {
  title: 'Experimental/UNSTABLE_Toggle',
  component: UNSTABLE_Toggle,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    validationState: {
      control: 'select',
      options: [...Object.values(ValidationStates), undefined],
      table: {
        defaultValue: { summary: undefined },
      },
    },
  },
  args: {
    hasIndicators: false,
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
type Story = StoryObj<typeof UNSTABLE_Toggle>;

export const Playground: Story = {
  name: 'UNSTABLE_Toggle',
};
