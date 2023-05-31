import React from 'react';
import { ComponentStory } from '@storybook/react';
import { SpiritSelectProps } from '../../../types';
import Select from '../Select';
import ChildrenNode from './ChildrenNode';

const Story: ComponentStory<typeof Select> = (args: SpiritSelectProps) => <Select {...args} />;

Story.args = {
  id: 'select-fluid',
  name: 'select-fluid',
  label: 'Input fluid label',
  isFluid: true,
  children: <ChildrenNode />,
};

export default Story;
