import React from 'react';
import { Flex } from '../../../Flex';
import { Icon } from '../../../Icon';
import { Navigation, NavigationItem } from '../../../Navigation';
import { Text } from '../../../Text';
import { UNSTABLE_Avatar } from '../../../UNSTABLE_Avatar';

const ProfileNavigation = () => (
  <Navigation aria-label="Profile" direction="vertical">
    <NavigationItem alignmentY="stretch">
      <Flex spacingX="space-500" alignmentX="stretch" alignmentY="center">
        <UNSTABLE_Avatar isSquare aria-label="Profile of Jiří Bárta">
          <Icon name="profile" boxSize={20} />
        </UNSTABLE_Avatar>
        <Text elementType="span" size="small" emphasis="semibold" UNSAFE_className="text-primary">
          My Account
        </Text>
      </Flex>
    </NavigationItem>
  </Navigation>
);
export default ProfileNavigation;
