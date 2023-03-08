// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React, { Ref } from 'react';
import { ComponentStory } from '@storybook/react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import { IconsProvider } from '../../../context';
import { Icon } from '../../Icon';
import { Text } from '../../Text';
import Dropdown from '../Dropdown';
import { Button } from '../../Button';
import { SpiritDropdownProps, DropdownRenderProps } from '../../../types';

export const dropdownTrigger = ({ isOpen, trigger: { className, ref, ...restOf } }: DropdownRenderProps) => (
  <Button UNSAFE_className={className} ref={ref as Ref<HTMLButtonElement>} {...restOf}>
    Trigger ({isOpen ? 'open' : 'closed'})
  </Button>
);

export const dropdownContent = (
  <>
    <a href="#info" className="d-flex mb-400">
      <Icon name="info" />
      <Text UNSAFE_className="ml-300">Information</Text>
    </a>
    <a href="#link" className="d-flex mb-400">
      <Icon name="link" />
      <Text UNSAFE_className="ml-300">More links</Text>
    </a>
    <a href="#profile" className="d-flex mb-400">
      <Icon name="profile" />
      <Text UNSAFE_className="ml-300">Profile</Text>
    </a>
    <a href="#help" className="d-flex">
      <Icon name="help" />
      <Text UNSAFE_className="ml-300">Help</Text>
    </a>
  </>
);

const Story: ComponentStory<typeof Dropdown> = (args: SpiritDropdownProps) => (
  <IconsProvider value={icons}>
    <Dropdown {...args} />
  </IconsProvider>
);

Story.args = {
  id: 'DemoDropdown',
  renderTrigger: dropdownTrigger,
  children: dropdownContent,
};

export default Story;
