import React, { useState } from 'react';
import { Container } from '../../Container';
import { Drawer, DrawerCloseButton, DrawerPanel } from '../../Drawer';
import { Flex } from '../../Flex';
import { NavigationActionVariants } from '../../Navigation/constants';
import { ProductLogo } from '../../ProductLogo';
import { defaultSvgLogo } from '../../ProductLogo/demo/ProductLogoDefault';
import { Stack } from '../../Stack';
import UNSTABLE_Header from '../UNSTABLE_Header';
import UNSTABLE_HeaderLogo from '../UNSTABLE_HeaderLogo';
import {
  MainNavigation,
  ProfileNavigation,
  SecondaryHorizontalNavigation,
  SecondaryVerticalNavigation,
} from './HeaderWithNavigation/index';

const HeaderWithPillNavigation = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <UNSTABLE_Header>
        <Container>
          <Flex alignmentX="left" alignmentY="stretch" spacing="space-1000">
            <UNSTABLE_HeaderLogo href="#">
              <ProductLogo>{defaultSvgLogo}</ProductLogo>
            </UNSTABLE_HeaderLogo>
            <MainNavigation variant={NavigationActionVariants.PILL} />
            <SecondaryHorizontalNavigation id="drawer-navigation-pill" handleOpenDrawer={() => setDrawerOpen(true)} />
          </Flex>
        </Container>
      </UNSTABLE_Header>

      <Drawer id="drawer-navigation-pill" isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
        <DrawerPanel>
          <DrawerCloseButton />
          <Stack hasIntermediateDividers hasSpacing UNSAFE_className="mt-900" spacing="space-900">
            <ProfileNavigation />
            <MainNavigation direction="vertical" variant={NavigationActionVariants.PILL} />
            <SecondaryVerticalNavigation />
          </Stack>
        </DrawerPanel>
      </Drawer>
    </>
  );
};

export default HeaderWithPillNavigation;
