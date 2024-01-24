// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import type { StoryObj } from '@storybook/react';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file -- @see https://jira.almacareer.tech/browse/DS-561
import icons from '@lmc-eu/spirit-icons/icons';
import { IconsProvider } from '../../../context';
import { IconProps } from '../../../types';
import Icon from '../Icon';

// @ts-expect-error -- Element' has no properties in common with type
const Story: StoryObj<typeof Icon> = (args: IconProps) => (
  <IconsProvider value={icons}>
    <Icon {...args} />
  </IconsProvider>
);

export default Story;
