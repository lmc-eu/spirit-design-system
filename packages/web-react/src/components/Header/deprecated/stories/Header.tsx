import React from 'react';
import { ComponentStory } from '@storybook/react';
import Header from '../Header';
import SpiritLogo from './SpiritLogo';
import { SpiritHeaderProps } from '../../../../types';

const Story: ComponentStory<typeof Header> = (args: SpiritHeaderProps) => <Header {...args} />;

Story.args = {
  children: <SpiritLogo />,
  isInverted: true,
};

export default Story;
