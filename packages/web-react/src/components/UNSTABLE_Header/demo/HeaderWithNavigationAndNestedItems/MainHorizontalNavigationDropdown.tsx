import React, { ElementType, forwardRef, ReactElement, useState } from 'react';
import { PolymorphicRef, SpiritNavigationActionProps } from '../../../../types';
import { Dropdown, DropdownPopover, DropdownTrigger } from '../../../Dropdown';
import { Icon } from '../../../Icon';
import { Item } from '../../../Item';
import { NavigationAction } from '../../../Navigation';

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_NavigationActionAsDropdownTrigger'] }] */
const _NavigationActionAsDropdownTrigger = <E extends ElementType = 'a'>(
  props: SpiritNavigationActionProps<E>,
  ref: PolymorphicRef<E>,
): ReactElement => <NavigationAction {...props} elementType="button" ref={ref} />;

const NavigationActionAsDropdownTrigger = forwardRef<HTMLButtonElement, SpiritNavigationActionProps<ElementType>>(
  _NavigationActionAsDropdownTrigger,
);

export const DropdownPopoverContent = () => (
  <ul className="list-unstyled">
    <li>
      <Item label="My Account" href="https://www.example.com" />
    </li>
    <li>
      <Item label="Settings" href="https://www.example.com" />
    </li>
    <li>
      <Item label="Log Out" href="https://www.example.com" />
    </li>
  </ul>
);

const MainHorizontalNavigationDropdown = () => {
  const [isNavigationActionDropdownOpen, setIsNavigationActionDropdownOpen] = useState(false);

  return (
    <Dropdown
      alignmentX="stretch"
      alignmentY="stretch"
      id="navigation-action-dropdown"
      isOpen={isNavigationActionDropdownOpen}
      onToggle={() => setIsNavigationActionDropdownOpen(!isNavigationActionDropdownOpen)}
      placement="bottom-end"
    >
      <DropdownTrigger elementType={NavigationActionAsDropdownTrigger as unknown as HTMLButtonElement}>
        Menu
        <Icon name={`chevron-${isNavigationActionDropdownOpen ? 'up' : 'down'}`} boxSize={20} />
      </DropdownTrigger>
      <DropdownPopover>
        <DropdownPopoverContent />
      </DropdownPopover>
    </Dropdown>
  );
};

export default MainHorizontalNavigationDropdown;
