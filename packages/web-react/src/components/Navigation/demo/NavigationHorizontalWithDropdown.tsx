import React, { ElementType, forwardRef, ReactElement } from 'react';
import { PolymorphicRef, SpiritNavigationActionProps } from '../../../types';
import Dropdown from '../../Dropdown/Dropdown';
import DropdownPopover from '../../Dropdown/DropdownPopover';
import DropdownTrigger from '../../Dropdown/DropdownTrigger';
import { Icon } from '../../Icon';
import { Item } from '../../Item';
import Navigation from '../Navigation';
import NavigationAction from '../NavigationAction';
import NavigationItem from '../NavigationItem';

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_NavigationActionAsDropdownTrigger'] }] */
const _NavigationActionAsDropdownTrigger = <E extends ElementType = 'a'>(
  props: SpiritNavigationActionProps<E>,
  ref: PolymorphicRef<E>,
): ReactElement => {
  return <NavigationAction ref={ref} {...props} elementType="button" />;
};

const NavigationActionAsDropdownTrigger = forwardRef<HTMLButtonElement, SpiritNavigationActionProps<ElementType>>(
  _NavigationActionAsDropdownTrigger,
);

const NavigationHorizontalWithDropdown = () => {
  const [isNavigationActionDropdownOpen, setIsNavigationActionDropdownOpen] = React.useState(false);

  return (
    <Navigation aria-label="Main Navigation">
      <NavigationItem>
        <NavigationAction href="/">Link</NavigationAction>
      </NavigationItem>
      <NavigationItem>
        <Dropdown
          alignmentX="stretch"
          alignmentY="stretch"
          id="dropdown-navigation"
          isOpen={isNavigationActionDropdownOpen}
          onToggle={() => setIsNavigationActionDropdownOpen(!isNavigationActionDropdownOpen)}
        >
          <DropdownTrigger elementType={NavigationActionAsDropdownTrigger as unknown as HTMLButtonElement}>
            Dropdown
            <Icon name={`chevron-${isNavigationActionDropdownOpen ? 'up' : 'down'}`} boxSize={20} />
          </DropdownTrigger>
          <DropdownPopover>
            <Item elementType="a" href="#" label="My Account" />
            <Item elementType="a" href="#" label="Settings" />
            <Item elementType="a" href="#" label="Log out" />
          </DropdownPopover>
        </Dropdown>
      </NavigationItem>
    </Navigation>
  );
};
export default NavigationHorizontalWithDropdown;
