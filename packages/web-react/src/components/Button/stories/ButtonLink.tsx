import React, { ElementType } from 'react';
import { ComponentStory } from '@storybook/react';
import ButtonLink from '../ButtonLink';
import { SpiritButtonLinkProps } from '../../../types';

const Story: ComponentStory<typeof ButtonLink> = <T extends ElementType = 'div', C = void, S = void>(
  args: SpiritButtonLinkProps<T, C, S>,
) => <ButtonLink {...args} />;

Story.args = {
  children: 'Click me',
};

export default Story;
