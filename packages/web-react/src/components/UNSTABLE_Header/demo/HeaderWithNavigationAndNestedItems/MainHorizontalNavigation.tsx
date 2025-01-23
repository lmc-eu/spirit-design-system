import React from 'react';
import { Navigation, NavigationAction, NavigationItem } from '../../../Navigation';
import MainHorizontalNavigationDropdown from './MainHorizontalNavigationDropdown';

export const MainHorizontalNavigation = () => (
  <Navigation aria-label="Main Navigation" UNSAFE_className="d-none d-desktop-flex">
    <NavigationItem>
      <NavigationAction href="#" isSelected>
        Selected
      </NavigationAction>
    </NavigationItem>
    <NavigationItem>
      <NavigationAction href="#">Link</NavigationAction>
    </NavigationItem>
    <NavigationItem>
      <MainHorizontalNavigationDropdown />
    </NavigationItem>
    <NavigationItem>
      <NavigationAction href="#" isDisabled>
        Disabled
      </NavigationAction>
    </NavigationItem>
  </Navigation>
);

export default MainHorizontalNavigation;
