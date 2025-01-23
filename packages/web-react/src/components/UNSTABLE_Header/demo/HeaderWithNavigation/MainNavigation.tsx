import React from 'react';
import { Direction } from '../../../../constants';
import { SpiritNavigationProps } from '../../../../types';
import { Navigation, NavigationAction, NavigationItem } from '../../../Navigation';

export const MainNavigation = ({ direction = Direction.HORIZONTAL }: Partial<SpiritNavigationProps>) => (
  <Navigation
    aria-label="Main Navigation"
    direction={direction}
    UNSAFE_className={direction === Direction.HORIZONTAL ? 'd-none d-desktop-flex' : undefined}
  >
    <NavigationItem>
      <NavigationAction href="#" isSelected>
        Job Offers
      </NavigationAction>
    </NavigationItem>
    <NavigationItem>
      <NavigationAction href="#">Magazine</NavigationAction>
    </NavigationItem>
  </Navigation>
);

export default MainNavigation;
