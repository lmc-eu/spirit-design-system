// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React, { ElementType } from 'react';
import { ComponentStory } from '@storybook/react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import { IconsProvider } from '../../../context';
import { SpiritAlertProps } from '../../../types';
import Alert from '../Alert';

const Story: ComponentStory<typeof Alert> = <T extends ElementType = 'div'>(args: SpiritAlertProps<T>) => (
  <IconsProvider value={icons}>
    <Alert {...args} />
  </IconsProvider>
);

Story.args = {
  children: 'Hey! Pay attention.',
};

export default Story;
