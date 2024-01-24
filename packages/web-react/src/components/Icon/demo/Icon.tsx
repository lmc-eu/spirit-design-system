// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import { ComponentStory } from '@storybook/react';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/icons';
import { IconsProvider } from '../../../context';
import { IconProps } from '../../../types';
import Icon from '../Icon';

const Story: ComponentStory<typeof Icon> = (args: IconProps) => (
  <IconsProvider value={icons}>
    <Icon {...args} />
  </IconsProvider>
);

export default Story;
