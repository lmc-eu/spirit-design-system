import React from 'react';
import { ComponentStory } from '@storybook/react';
import RadioField from '../RadioField';
import { SpiritRadioFieldProps } from '../../../types';

const Story: ComponentStory<typeof RadioField> = (args: SpiritRadioFieldProps) => <RadioField {...args} />;

Story.args = {
  id: 'example',
  isChecked: true,
  isDisabled: false,
  isLabelHidden: false,
  label: 'Label',
  name: 'example',
  helperText: 'Helper text',
};

export default Story;
