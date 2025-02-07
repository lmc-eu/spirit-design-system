import React, { FunctionComponent } from 'react';
import { ClickEvent } from '../../../../types';
import { Button } from '../../../Button';
import { ButtonLink } from '../../../ButtonLink';
import { Icon } from '../../../Icon';
import { Navigation, NavigationAvatar, NavigationItem } from '../../../Navigation';
import { Text } from '../../../Text';
import { VisuallyHidden } from '../../../VisuallyHidden';

interface SecondaryHorizontalNavigationProps {
  id: string;
  handleOpenDrawer: (event: ClickEvent) => void;
}

const SecondaryHorizontalNavigation: FunctionComponent<SecondaryHorizontalNavigationProps> = ({
  id,
  handleOpenDrawer,
}) => (
  <Navigation marginLeft="auto" aria-label="Secondary Navigation">
    <NavigationItem>
      <Button color="tertiary" isSymmetrical>
        <Icon name="search" />
        <VisuallyHidden>Search</VisuallyHidden>
      </Button>
    </NavigationItem>
    <NavigationItem alignmentY="center" UNSAFE_className="d-none d-desktop-flex">
      <NavigationAvatar avatarContent={<Icon name="profile" boxSize={20} />} aria-label="Profile of Jiří Bárta">
        <Text elementType="span" size="small" emphasis="semibold">
          My Account
        </Text>
      </NavigationAvatar>
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
        id={`${id}-open-button`}
        color="tertiary"
        aria-label="Toggle Menu"
        aria-controls={id}
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
