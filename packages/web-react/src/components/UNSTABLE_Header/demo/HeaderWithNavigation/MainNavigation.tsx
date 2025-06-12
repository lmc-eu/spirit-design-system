import React from 'react';
import { Direction, ShapeVariants } from '../../../../constants';
import { NavigationActionVariantsType, SpiritNavigationProps } from '../../../../types';
import { Navigation, NavigationAction, NavigationItem } from '../../../Navigation';

interface MainNavigationProps extends Partial<SpiritNavigationProps> {
  variant?: NavigationActionVariantsType;
}

export const MainNavigation = ({
  direction = Direction.HORIZONTAL,
  variant = ShapeVariants.BOX,
}: Partial<MainNavigationProps>) => (
  <Navigation
    aria-label="Main Navigation"
    direction={direction}
    hideOn={direction === Direction.HORIZONTAL ? ['mobile', 'tablet'] : undefined}
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
