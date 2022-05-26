import React, { ElementType } from 'react';
import { ComponentStory } from '@storybook/react';
import Pill from '../Pill';
import { SpiritPillProps } from '../../../types';

const Story: ComponentStory<typeof Pill> = <T extends ElementType = 'span'>(args: SpiritPillProps<T>) => (
  <Pill {...args} />
);

Story.args = {
  children: '3',
};

export default Story;
