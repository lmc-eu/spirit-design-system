import React, { ElementType } from 'react';
import { ComponentStory } from '@storybook/react';
import Header from '../Header';
import SpiritLogo from './SpiritLogo';

const Story: ComponentStory<typeof Header> = (args: any) => (
  <Header {...args} />
);

Story.args = {
  children: <SpiritLogo />,
  isInverted: true,
};

export default Story;
