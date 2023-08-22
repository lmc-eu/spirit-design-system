import React from 'react';
import { ComponentStory } from '@storybook/react';
import Radio from '../Radio';
import { SpiritRadioProps } from '../../../types';

const Story: ComponentStory<typeof Radio> = (args: SpiritRadioProps) => <Radio {...args} />;

export default Story;
