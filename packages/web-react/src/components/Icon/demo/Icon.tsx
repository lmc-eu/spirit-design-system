// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import { ComponentStory } from '@storybook/react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import { IconsProvider } from '../../../context';
import Icon from '../Icon';
import { IconProps } from '../../../types';

const Story: ComponentStory<typeof Icon> = (args: IconProps) => (
  <IconsProvider value={icons}>
    <Icon {...args} />
  </IconsProvider>
);

export default Story;
