// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import { ComponentStory } from '@storybook/react';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import { IconsProvider } from '../../../context';
import { SpiritDropdownProps } from '../../../types';
import { Stack } from '../../Stack';
import Dropdown from '../Dropdown';
import { dropdownContent, dropdownTrigger } from './Dropdown';

const Story: ComponentStory<typeof Dropdown> = (args: SpiritDropdownProps) => (
  <IconsProvider value={icons}>
    <Stack>
      Mobile only
      <Dropdown {...args} fullWidthMode="mobile-only" renderTrigger={dropdownTrigger}>
        {dropdownContent}
      </Dropdown>
      All
      <Dropdown {...args} fullWidthMode="all" renderTrigger={dropdownTrigger}>
        {dropdownContent}
      </Dropdown>
    </Stack>
  </IconsProvider>
);

export default Story;
