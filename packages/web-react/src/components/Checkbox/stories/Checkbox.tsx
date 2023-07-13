import React from 'react';
import { ComponentStory } from '@storybook/react';
import Checkbox from '../Checkbox';
import { SpiritCheckboxProps } from '../../../types';

const Story: ComponentStory<typeof Checkbox> = (args: SpiritCheckboxProps) => <Checkbox {...args} />;

export default Story;
