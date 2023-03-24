import React, { ElementType } from 'react';
import { ComponentStory } from '@storybook/react';
import Button from '../Button';
import { SpiritButtonProps } from '../../../types';

const Story: ComponentStory<typeof Button> = <T extends ElementType = 'button', C = void, S = void>(
  args: SpiritButtonProps<T, C, S>,
) => <Button {...args} />;

Story.args = {
  children: 'Click me',
};

export default Story;
