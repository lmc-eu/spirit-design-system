import React from 'react';
import { StoryFn } from '@storybook/react';
import { SpiritCheckboxProps } from '../../../types';
import Checkbox from '../Checkbox';

const Story: StoryFn<typeof Checkbox> = (args: SpiritCheckboxProps) => <Checkbox {...args} />;

export default Story;
