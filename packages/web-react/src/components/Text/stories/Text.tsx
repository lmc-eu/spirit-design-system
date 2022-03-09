import React, { ElementType } from 'react';
import { ComponentStory } from '@storybook/react';
import Text from '../Text';
import { SpiritTextProps } from '../../../types';

const Story: ComponentStory<typeof Text> = <T extends ElementType = 'div'>(args: SpiritTextProps<T>) => (
  <Text {...args} />
);

Story.args = {
  children: 'Body Text',
};

export default Story;
