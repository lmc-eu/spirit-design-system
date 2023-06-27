import React from 'react';
import { ComponentStory } from '@storybook/react';
import SpiritLogo from './SpiritLogo';
import { HeaderProps } from '../../../types';
import { Link } from '../../Link';
import Header from '../Header';

const Story: ComponentStory<typeof Header> = (args: HeaderProps) => <Header {...args} />;

Story.args = {
  children: (
    <Link href="#">
      <SpiritLogo />
    </Link>
  ),
};

export default Story;
