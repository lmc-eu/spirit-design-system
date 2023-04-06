// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import { ComponentStory } from '@storybook/react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import { IconsProvider } from '../../../context';
import { SpiritSpinnerProps } from '../../../types';
import Spinner from '../Spinner';

const Story: ComponentStory<typeof Spinner> = <C extends undefined = undefined>(args: SpiritSpinnerProps<C>) => (
  <IconsProvider value={icons}>
    <Spinner {...args} />
  </IconsProvider>
);

Story.args = {
  color: undefined,
};

export default Story;
