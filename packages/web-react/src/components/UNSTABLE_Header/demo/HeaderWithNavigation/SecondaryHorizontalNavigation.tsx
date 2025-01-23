import React, { FunctionComponent } from 'react';
import { ClickEvent } from '../../../../types';
import { Button } from '../../../Button';
import { ButtonLink } from '../../../ButtonLink';
import { Icon } from '../../../Icon';
import { Navigation, NavigationItem } from '../../../Navigation';

interface SecondaryHorizontalNavigationProps {
  handleOpenDrawer: (event: ClickEvent) => void;
}

const SecondaryHorizontalNavigation: FunctionComponent<SecondaryHorizontalNavigationProps> = ({ handleOpenDrawer }) => (
  <Navigation marginLeft="auto" aria-label="Secondary Navigation">
    <NavigationItem>
      <Button color="tertiary" isSymmetrical>
        <Icon name="search" />
      </Button>
    </NavigationItem>
    <NavigationItem UNSAFE_className="d-none d-desktop-flex">
      <ButtonLink href="#" color="secondary">
        Log In
      </ButtonLink>
    </NavigationItem>
    <NavigationItem UNSAFE_className="d-none d-desktop-flex">
      <ButtonLink href="#">Post a Job</ButtonLink>
    </NavigationItem>
    <NavigationItem UNSAFE_className="d-desktop-none">
      <Button
        color="tertiary"
        aria-label="Toggle Menu"
        aria-controls="drawer-navigation"
        aria-expanded="false"
        onClick={handleOpenDrawer}
        isSymmetrical
      >
        <Icon name="hamburger" />
      </Button>
    </NavigationItem>
  </Navigation>
);

export default SecondaryHorizontalNavigation;
