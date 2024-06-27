import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { ValidationStates } from '../../../constants';
import { SpiritSliderProps } from '../../../types';
import { DEMO_SLIDER_DEFAULT_VALUE, SLIDER_DEFAULT_PROPS } from '../constants';
import ReadMe from '../README.md';
import { UNSTABLE_Slider } from '..';

const meta: Meta<typeof UNSTABLE_Slider> = {
  title: 'Experimental/UNSTABLE_Slider',
  component: UNSTABLE_Slider,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
    layout: 'centered',
  },
  argTypes: {
    helperText: {
      control: 'text',
      description: 'The helper text of the slider',
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
    id: {
      control: 'text',
      description: 'The id of the slider',
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
    isFluid: {
      control: 'boolean',
      description: 'Whether the slider is fluid',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    isLabelHidden: {
      control: 'boolean',
      description: 'Whether the label is hidden',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    isDisabled: {
      control: 'boolean',
      description: 'Whether the slider is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      control: 'text',
      description: 'The label of the slider',
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
    max: {
      control: 'number',
      description: 'The maximum value of the slider',
      table: {
        defaultValue: { summary: `${SLIDER_DEFAULT_PROPS.max}` },
      },
    },
    min: {
      control: 'number',
      description: 'The minimum value of the slider',
      table: {
        defaultValue: { summary: `${SLIDER_DEFAULT_PROPS.min}` },
      },
    },
    step: {
      control: 'number',
      description: 'The step of the slider',
      table: {
        defaultValue: { summary: `${SLIDER_DEFAULT_PROPS.step}` },
      },
    },
    validationState: {
      control: 'select',
      description: 'The validation state of the slider',
      options: [...Object.values(ValidationStates), undefined],
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
    validationText: {
      control: 'text',
      description: 'The validation text to display',
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
    value: {
      control: 'number',
      description: 'The value of the slider',
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    helperText: '',
    id: 'slider',
    isFluid: false,
    isLabelHidden: false,
    isDisabled: false,
    label: 'Label',
    max: SLIDER_DEFAULT_PROPS.max,
    min: SLIDER_DEFAULT_PROPS.min,
    step: SLIDER_DEFAULT_PROPS.step,
    validationState: undefined,
    validationText: '',
    value: DEMO_SLIDER_DEFAULT_VALUE,
  },
};

export default meta;
type Story = StoryObj<SpiritSliderProps>;

const SliderWithHooks = (args: SpiritSliderProps) => {
  const { value: argValue } = args;
  const [value, setValue] = useState(argValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return <UNSTABLE_Slider {...args} onChange={handleChange} value={value} />;
};

export const SliderPlayground: Story = {
  name: 'UNSTABLE_Slider',
  render: (args) => (
    <div
      className="bg-cover d-flex"
      style={{
        width: '40rem',
        maxWidth: '100%',
        height: '10rem',
        overflow: 'auto',
        padding: '1.5rem',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <SliderWithHooks {...args} />
    </div>
  ),
};
