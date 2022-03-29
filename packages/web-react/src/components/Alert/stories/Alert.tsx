import React, { ElementType } from 'react';
import { ComponentStory } from '@storybook/react';
import Alert from '../Alert';
import { SpiritAlertProps } from '../../../types';

const Story: ComponentStory<typeof Alert> = <T extends ElementType = 'div'>(args: SpiritAlertProps<T>) => (
  <Alert {...args} />
);

Story.args = {
  children: 'Hey! Pay attention.',
};

export default Story;
