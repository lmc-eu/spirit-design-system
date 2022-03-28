import React, { ElementType } from 'react';
import { ComponentStory } from '@storybook/react';
import Link from '../Link';
import { SpiritLinkProps } from '../../../types';

const Story: ComponentStory<typeof Link> = <T extends ElementType = 'a'>(args: SpiritLinkProps<T>) => (
  <Link {...args} />
);

Story.args = {
  children: 'Going somewhere?',
  href: 'https://www.example.com',
};

export default Story;
