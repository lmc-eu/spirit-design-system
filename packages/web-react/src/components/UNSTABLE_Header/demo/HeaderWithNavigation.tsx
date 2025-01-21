import React, { ElementType, forwardRef } from 'react';
import { SpiritNavigationActionProps } from 'src/types/navigation';
import { PolymorphicRef } from '../../../types';
import { Button } from '../../Button';
import { ButtonLink } from '../../ButtonLink';
import { Container } from '../../Container';
import { Dropdown, DropdownPopover, DropdownTrigger } from '../../Dropdown';
import { Flex } from '../../Flex';
import { Icon } from '../../Icon';
import { Item } from '../../Item';
import { Navigation, NavigationAction, NavigationItem } from '../../Navigation';
import { ProductLogo } from '../../ProductLogo';
import { defaultSvgLogo } from '../../ProductLogo/demo/ProductLogoDefault';
import { Text } from '../../Text';
import { UNSTABLE_Avatar } from '../../UNSTABLE_Avatar';
import UNSTABLE_Header from '../UNSTABLE_Header';
import UNSTABLE_HeaderLogo from '../UNSTABLE_HeaderLogo';

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_NavigationActionAsDropdownTrigger'] }] */
const _NavigationActionAsDropdownTrigger = <E extends ElementType = 'a'>(
  props: SpiritNavigationActionProps<E>,
  ref: PolymorphicRef<E>,
): JSX.Element => {
  return <NavigationAction ref={ref} {...props} elementType="button" />;
};

const NavigationActionAsDropdownTrigger = forwardRef<HTMLButtonElement, SpiritNavigationActionProps<ElementType>>(
  _NavigationActionAsDropdownTrigger,
);

const HeaderDefault = () => {
  const [isNavigationActionDropdownOpen, setIsNavigationActionDropdownOpen] = React.useState(false);
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = React.useState(false);

  return (
    <UNSTABLE_Header>
      <Container>
        <Flex alignmentX="left" alignmentY="stretch" spacing="space-1000">
          <UNSTABLE_HeaderLogo href="#">
            <ProductLogo>{defaultSvgLogo}</ProductLogo>
          </UNSTABLE_HeaderLogo>
          <Navigation aria-label="Main Navigation">
            <NavigationItem>
              <NavigationAction href="#">Link</NavigationAction>
            </NavigationItem>
            <NavigationItem>
              <NavigationAction href="#" isSelected>
                Selected
              </NavigationAction>
            </NavigationItem>
            <NavigationItem>
              <Dropdown
                alignmentX="stretch"
                alignmentY="stretch"
                id="navigation-action-dropdown"
                isOpen={isNavigationActionDropdownOpen}
                onToggle={() => setIsNavigationActionDropdownOpen(!isNavigationActionDropdownOpen)}
                placement="bottom-end"
              >
                {/* Tohle je velka prcarna, ale asi to teda nejde jinak? */}
                <DropdownTrigger elementType={NavigationActionAsDropdownTrigger as unknown as HTMLButtonElement}>
                  Dropdown
                  <Icon name="chevron-up" boxSize={20} UNSAFE_className="accessibility-open" />
                  <Icon name="chevron-down" boxSize={20} UNSAFE_className="accessibility-closed" />
                </DropdownTrigger>
                <DropdownPopover>
                  <ul className="list-unstyled">
                    <li>
                      <Item label="My Account" href="https://www.example.com" />
                    </li>
                    <li>
                      <Item label="Settings" href="https://www.example.com" />
                    </li>
                    <li>
                      <Item label="Log Out" href="https://www.example.com" />
                    </li>
                  </ul>
                </DropdownPopover>
              </Dropdown>
            </NavigationItem>
            <NavigationItem>
              <NavigationAction href="#" isDisabled>
                Disabled
              </NavigationAction>
            </NavigationItem>
          </Navigation>
          <Navigation marginLeft="auto" aria-label="Secondary Navigation">
            <NavigationItem>
              <Button color="tertiary" isSymmetrical>
                <Icon name="search" />
              </Button>
            </NavigationItem>
            <NavigationItem alignmentY="stretch">
              <Dropdown
                alignmentX="stretch"
                alignmentY="stretch"
                id="avatar-dropdown"
                isOpen={isAvatarDropdownOpen}
                onToggle={() => setIsAvatarDropdownOpen(!isAvatarDropdownOpen)}
                placement="bottom-end"
              >
                {/*Tohle vrati <button> s obema classes - class a UNSAFE_className, melo by to smazat UNSAFE.*/}
                <DropdownTrigger elementType="button" UNSAFE_className="button-unstyled" type="button">
                  <Flex spacingX="space-500" alignmentX="stretch" alignmentY="center">
                    <UNSTABLE_Avatar isSquare aria-label="Profile of Jiří Bárta">
                      <Icon name="profile" boxSize={20} />
                    </UNSTABLE_Avatar>
                    <Text elementType="span" size="small" emphasis="semibold" UNSAFE_className="text-primary">
                      My Account
                    </Text>
                    <Icon name="chevron-up" boxSize={20} UNSAFE_className="accessibility-open" />
                    <Icon name="chevron-down" boxSize={20} UNSAFE_className="accessibility-closed" />
                  </Flex>
                </DropdownTrigger>

                <DropdownPopover>
                  <ul className="list-unstyled">
                    <li>
                      <Item label="My Account" href="https://www.example.com" />
                    </li>
                    <li>
                      <Item label="Settings" href="https://www.example.com" />
                    </li>
                    <li>
                      <Item label="Log Out" href="https://www.example.com" />
                    </li>
                  </ul>
                </DropdownPopover>
              </Dropdown>
            </NavigationItem>
            <NavigationItem>
              <ButtonLink href="#" color="secondary">
                Log out
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
