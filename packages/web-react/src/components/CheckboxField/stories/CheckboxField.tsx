import React from 'react';
import { ComponentStory } from '@storybook/react';
import CheckboxField from '../CheckboxField';
import { SpiritCheckboxFieldProps } from '../../../types';

const Story: ComponentStory<typeof CheckboxField> = (args: SpiritCheckboxFieldProps) => <CheckboxField {...args} />;

Story.args = {};

export default Story;
