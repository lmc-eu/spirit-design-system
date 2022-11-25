// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import { ComponentStory } from '@storybook/react';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import Dropdown from '../Dropdown';
import { dropdownContent, dropdownTrigger } from './Dropdown';
import { IconsProvider } from '../../../context';
import { SpiritDropdownProps } from '../../../types';

const Story: ComponentStory<typeof Dropdown> = (args: SpiritDropdownProps) => (
  <IconsProvider value={icons}>
    <Dropdown {...args} enableAutoClose={false} renderTrigger={dropdownTrigger}>
      {dropdownContent}
    </Dropdown>
  </IconsProvider>
);

export default Story;
