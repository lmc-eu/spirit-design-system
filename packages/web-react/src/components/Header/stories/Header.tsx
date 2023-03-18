import React from 'react';
import { ComponentStory } from '@storybook/react';
import SpiritLogo from './SpiritLogo';
import { HeaderModernProps } from '../../../types';
import Header from '../Header';
import HeaderLink from '../HeaderLink';

const Story: ComponentStory<typeof Header> = (args: HeaderModernProps) => <Header {...args} />;

Story.args = {
  children: (
    <HeaderLink href="#">
      <SpiritLogo />
    </HeaderLink>
  ),
  color: 'inverted',
  isSimple: false,
};

export default Story;
