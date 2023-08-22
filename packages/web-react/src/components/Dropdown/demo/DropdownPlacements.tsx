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
      Bottom Left
      <Dropdown {...args} placement="bottom-left" renderTrigger={dropdownTrigger}>
        {dropdownContent}
      </Dropdown>
      Bottom Right
      <Dropdown {...args} placement="bottom-right" renderTrigger={dropdownTrigger}>
        {dropdownContent}
      </Dropdown>
      Top Left
      <Dropdown {...args} placement="top-left" renderTrigger={dropdownTrigger}>
        {dropdownContent}
      </Dropdown>
      Top Right
      <Dropdown {...args} placement="top-right" renderTrigger={dropdownTrigger}>
        {dropdownContent}
      </Dropdown>
    </Stack>
  </IconsProvider>
);

export default Story;
