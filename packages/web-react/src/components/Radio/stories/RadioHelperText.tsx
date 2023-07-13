import React from 'react';
import { ComponentStory } from '@storybook/react';
import Radio from '../Radio';
import { SpiritRadioProps } from '../../../types';

const Story: ComponentStory<typeof Radio> = (args: SpiritRadioProps) => <Radio {...args} />;

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
