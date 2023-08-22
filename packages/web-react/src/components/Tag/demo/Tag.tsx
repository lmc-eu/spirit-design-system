import React, { ElementType } from 'react';
import { ComponentStory } from '@storybook/react';
import { SpiritTagProps } from '../../../types';
import Tag from '../Tag';

const Story: ComponentStory<typeof Tag> = <T extends ElementType = 'span', C = void, S = void>(
  args: SpiritTagProps<T, C, S>,
) => <Tag {...args} />;

Story.args = {
  children: 'Tag',
};

export default Story;
