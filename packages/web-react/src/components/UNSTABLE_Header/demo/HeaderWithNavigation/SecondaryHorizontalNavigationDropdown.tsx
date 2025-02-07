import React, { ElementType, forwardRef, ReactElement, useState } from 'react';
import { PolymorphicRef, SpiritNavigationAvatarProps } from '../../../../types';
import { Dropdown, DropdownPopover, DropdownTrigger } from '../../../Dropdown';
import { Icon } from '../../../Icon';
import { NavigationAvatar } from '../../../Navigation';
import { Text } from '../../../Text';
import { DropdownPopoverContent } from '../HeaderWithNavigationAndNestedItems/MainHorizontalNavigationDropdown';

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_NavigationAvatarAsDropdownTrigger'] }] */
const _NavigationAvatarAsDropdownTrigger = <E extends ElementType = 'button'>(
  props: SpiritNavigationAvatarProps<E>,
  ref: PolymorphicRef<E>,
): ReactElement => {
  return <NavigationAvatar ref={ref} {...props} elementType="button" />;
};

const NavigationAvatarAsDropdownTrigger = forwardRef<HTMLButtonElement, SpiritNavigationAvatarProps<'button'>>(
  _NavigationAvatarAsDropdownTrigger,
);

type SecondaryHorizontalNavigationDropdownProps = {
  id: string;
  isSquare?: boolean;
};

const SecondaryHorizontalNavigationDropdown = ({
  id,
  isSquare = false,
}: SecondaryHorizontalNavigationDropdownProps): ReactElement => {
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);

  return (
    <Dropdown
      alignmentX="center"
      alignmentY="center"
      id={id}
      isOpen={isAvatarDropdownOpen}
      onToggle={() => setIsAvatarDropdownOpen(!isAvatarDropdownOpen)}
      placement="bottom-end"
    >
      <DropdownTrigger
        elementType={NavigationAvatarAsDropdownTrigger}
        avatarContent={<Icon name="profile" boxSize={20} />}
        aria-label="Profile of Jiří Bárta"
        isSquare={isSquare}
      >
        <Text elementType="span" size="small" emphasis="semibold">
          My Account
        </Text>
        <Icon name={`chevron-${isAvatarDropdownOpen ? 'up' : 'down'}`} boxSize={20} />
      </DropdownTrigger>
      <DropdownPopover>
        <DropdownPopoverContent />
      </DropdownPopover>
    </Dropdown>
  );
};

export default SecondaryHorizontalNavigationDropdown;
