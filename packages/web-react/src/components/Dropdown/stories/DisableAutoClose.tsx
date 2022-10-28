// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import { ComponentStory } from '@storybook/react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import { IconsProvider } from '../../../context';
import { Icon } from '../../Icon';
import { Text } from '../../Text';
import Dropdown from '../Dropdown';
import { SpiritDropdownProps, DropdownRenderProps } from '../../../types';

const Story: ComponentStory<typeof Dropdown> = (args: SpiritDropdownProps) => (
  <IconsProvider value={icons}>
    <Dropdown {...args} />
  </IconsProvider>
);

Story.args = {
  id: 'DemoDropdown',
  renderTrigger: ({ isOpen, trigger: { className, ...restOf } }: DropdownRenderProps) => (
    <button type="button" className={['Button Button--primary Button--medium', className].join(' ')} {...restOf}>
      Trigger ({isOpen ? 'open' : 'closed'})
    </button>
  ),
  disableAutoClose: true,
  children: (
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
  ),
};

export default Story;
