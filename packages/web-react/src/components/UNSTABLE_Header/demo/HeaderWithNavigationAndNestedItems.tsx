import React, { useState } from 'react';
import { Container } from '../../Container';
import { Drawer, DrawerCloseButton, DrawerPanel } from '../../Drawer';
import { Flex } from '../../Flex';
import { ProductLogo } from '../../ProductLogo';
import { defaultSvgLogo } from '../../ProductLogo/demo/ProductLogoDefault';
import { Stack } from '../../Stack';
import UNSTABLE_Header from '../UNSTABLE_Header';
import UNSTABLE_HeaderLogo from '../UNSTABLE_HeaderLogo';
import { ProfileNavigation } from './HeaderWithNavigation/index';
import {
  MainHorizontalNavigation,
  MainVerticalNavigation,
  SecondaryHorizontalNavigation,
  SecondaryVerticalNavigation,
} from './HeaderWithNavigationAndNestedItems/index';

const HeaderWithNavigationAndNestedItems = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <UNSTABLE_Header>
        <Container>
          <Flex alignmentX="left" alignmentY="stretch" spacing="space-1000">
            <UNSTABLE_HeaderLogo href="#">
              <ProductLogo>{defaultSvgLogo}</ProductLogo>
            </UNSTABLE_HeaderLogo>
            <MainHorizontalNavigation />
            <SecondaryHorizontalNavigation handleOpenDrawer={() => setDrawerOpen(true)} />
          </Flex>
        </Container>
      </UNSTABLE_Header>

      <Drawer id="drawer-navigation-expanded" isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
        <DrawerPanel>
          <DrawerCloseButton />
          <Stack hasIntermediateDividers hasSpacing UNSAFE_className="mt-900" spacing="space-900">
            <ProfileNavigation isSquare />
            <MainVerticalNavigation />
            <SecondaryVerticalNavigation />
          </Stack>
        </DrawerPanel>
      </Drawer>
    </>
  );
};
export default HeaderWithNavigationAndNestedItems;
