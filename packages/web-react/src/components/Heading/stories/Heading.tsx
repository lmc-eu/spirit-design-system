import React, { ElementType } from 'react';
import { ComponentStory } from '@storybook/react';
import Heading from '../Heading';
import { SpiritHeadingProps } from '../../../types';

const Story: ComponentStory<typeof Heading> = <T extends ElementType = 'div'>(args: SpiritHeadingProps<T>) => (
  <Heading {...args} />
);

Story.args = {
  children: 'Heading Text',
  size: 'medium',
};

export default Story;
