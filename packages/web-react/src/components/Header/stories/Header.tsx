import React from 'react';
import { ComponentStory } from '@storybook/react';
import SpiritLogo from './SpiritLogo';
import { HeaderModernProps } from '../../../types';
import { Link } from '../../Link';
import Header from '../Header';

const Story: ComponentStory<typeof Header> = (args: HeaderModernProps) => <Header {...args} />;

Story.args = {
  children: (
    <Link href="#">
      <SpiritLogo />
    </Link>
  ),
};

export default Story;
