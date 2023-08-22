import React from 'react';
import { ComponentStory } from '@storybook/react';
import Checkbox from '../Checkbox';
import { SpiritCheckboxProps } from '../../../types';

const Story: ComponentStory<typeof Checkbox> = (args: SpiritCheckboxProps) => <Checkbox {...args} />;

Story.args = {
  id: 'example',
  isChecked: true,
  isDisabled: false,
  isItem: false,
  isLabelHidden: false,
  isRequired: false,
  label: 'Label',
  name: 'example',
  helperText: 'Helper text',
};

export default Story;
