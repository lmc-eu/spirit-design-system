import React from 'react';
import { Direction } from '../../../../constants';
import { NavigationActionVariantsType, SpiritNavigationProps } from '../../../../types';
import { Navigation, NavigationAction, NavigationItem } from '../../../Navigation';
import { NavigationActionVariants } from '../../../Navigation/constants';

interface MainNavigationProps extends Partial<SpiritNavigationProps> {
  variant?: NavigationActionVariantsType;
}

export const MainNavigation = ({
  direction = Direction.HORIZONTAL,
  variant = NavigationActionVariants.BOX,
}: Partial<MainNavigationProps>) => (
  <Navigation
    aria-label="Main Navigation"
    direction={direction}
    UNSAFE_className={direction === Direction.HORIZONTAL ? 'd-none d-desktop-flex' : undefined}
  >
    <NavigationItem>
      <NavigationAction href="#" variant={variant} isSelected>
        Job Offers
      </NavigationAction>
    </NavigationItem>
    <NavigationItem>
      <NavigationAction href="#" variant={variant}>
        Magazine
      </NavigationAction>
    </NavigationItem>
    <NavigationItem>
      <NavigationAction href="#" variant={variant}>
        Contact
      </NavigationAction>
    </NavigationItem>
  </Navigation>
);

export default MainNavigation;
