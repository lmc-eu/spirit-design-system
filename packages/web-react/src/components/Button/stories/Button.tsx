import React, { ElementType } from 'react';
import { ComponentStory } from '@storybook/react';
import Button from '../Button';
import { SpiritButtonProps } from '../../../types';

const Story: ComponentStory<typeof Button> = <T extends ElementType = 'div'>(args: SpiritButtonProps<T>) => (
  <Button {...args} />
);

Story.args = {
  children: 'Click me',
};

export default Story;
