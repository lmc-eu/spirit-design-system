import React from 'react';
import { Button } from '../../Button';
import { ButtonLink } from '../../ButtonLink';
import { Container } from '../../Container';
import { Flex } from '../../Flex';
import { Icon } from '../../Icon';
import { Navigation, NavigationItem, NavigationLink } from '../../Navigation';
import { ProductLogo } from '../../ProductLogo';
import { defaultSvgLogo } from '../../ProductLogo/demo/ProductLogoDefault';
import UNSTABLE_Header from '../UNSTABLE_Header';
import UNSTABLE_HeaderLogo from '../UNSTABLE_HeaderLogo';

const HeaderDefault = () => {
  return (
    <UNSTABLE_Header>
      <Container>
        <Flex alignmentX="left" alignmentY="center" spacing="space-1000">
          <UNSTABLE_HeaderLogo href="#">
            <ProductLogo>{defaultSvgLogo}</ProductLogo>
          </UNSTABLE_HeaderLogo>
          <Navigation aria-label="Main Navigation">
            <NavigationItem>
              <NavigationLink href="#">Link</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink href="#" isSelected>
                Selected
              </NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink href="#" isDisabled>
                Disabled
              </NavigationLink>
            </NavigationItem>
          </Navigation>
          <Navigation marginLeft="auto" aria-label="Secondary Navigation">
            <NavigationItem>
              <Button color="tertiary" isSymmetrical>
                <Icon name="search" />
              </Button>
            </NavigationItem>
            <NavigationItem>
              <ButtonLink href="#" color="secondary">
                Sign up
              </ButtonLink>
            </NavigationItem>
            <NavigationItem>
              <ButtonLink href="#">Post a job</ButtonLink>
            </NavigationItem>
          </Navigation>
        </Flex>
      </Container>
    </UNSTABLE_Header>
  );
};
export default HeaderDefault;
