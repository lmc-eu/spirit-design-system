import React from 'react';
import { StoryFn } from '@storybook/react';
import Checkbox from '../Checkbox';
import { SpiritCheckboxProps } from '../../../types';

const Story: StoryFn<typeof Checkbox> = (args: SpiritCheckboxProps) => <Checkbox {...args} />;

Story.args = {
  isChecked: false,
  isDisabled: false,
  isItem: true,
  isLabelHidden: false,
  isRequired: false,
  label: 'Label Item',
  name: 'example',
};

export default Story;
