import React, { ElementType } from 'react';
import { ComponentStory } from '@storybook/react';
import { SpiritTextProps } from '../../../types';
import Text from '../Text';

const Story: ComponentStory<typeof Text> = <T extends ElementType = 'div', S = void>(args: SpiritTextProps<T, S>) => (
  <Text {...args} />
);

Story.args = {
  children: 'Body Text',
};

export default Story;
