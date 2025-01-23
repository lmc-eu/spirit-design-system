import React, { useState } from 'react';
import { SpiritNavigationActionProps } from '../../../../types';
import { Dropdown, DropdownPopover, DropdownTrigger } from '../../../Dropdown';
import { Flex } from '../../../Flex';
import { Icon } from '../../../Icon';
import { Text } from '../../../Text';
import { UNSTABLE_Avatar } from '../../../UNSTABLE_Avatar';
import { DropdownPopoverContent } from './MainHorizontalNavigationDropdown';

const AvatarButtonAsDropdownTrigger = (props: SpiritNavigationActionProps) => (
  <button {...props} className="button-unstyled" type="button" />
);

const SecondaryHorizontalNavigationDropdown = () => {
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);

  return (
    <Dropdown
      alignmentX="stretch"
      alignmentY="stretch"
      id="avatar-dropdown"
      isOpen={isAvatarDropdownOpen}
      onToggle={() => setIsAvatarDropdownOpen(!isAvatarDropdownOpen)}
      placement="bottom-end"
    >
      <DropdownTrigger elementType={AvatarButtonAsDropdownTrigger as unknown as HTMLButtonElement}>
        <Flex spacingX="space-500" alignmentX="stretch" alignmentY="center">
          <UNSTABLE_Avatar isSquare aria-label="Profile of Jiří Bárta">
            <Icon name="profile" boxSize={20} />
          </UNSTABLE_Avatar>
          <Text elementType="span" size="small" emphasis="semibold">
            My Account
          </Text>
          <Icon name={`chevron-${isAvatarDropdownOpen ? 'up' : 'down'}`} boxSize={20} />
        </Flex>
      </DropdownTrigger>
      <DropdownPopover>
        <DropdownPopoverContent />
      </DropdownPopover>
    </Dropdown>
  );
};

export default SecondaryHorizontalNavigationDropdown;
