import React from 'react';
import { ComponentStory } from '@storybook/react';
import CheckboxField from '../CheckboxField';
import { SpiritCheckboxFieldProps } from '../../../types';

const Story: ComponentStory<typeof CheckboxField> = (args: SpiritCheckboxFieldProps) => <CheckboxField {...args} />;

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
