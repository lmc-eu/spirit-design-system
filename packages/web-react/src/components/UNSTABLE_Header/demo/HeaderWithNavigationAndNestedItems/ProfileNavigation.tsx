import React from 'react';
import { Avatar } from '../../../Avatar';
import { Flex } from '../../../Flex';
import { Icon } from '../../../Icon';
import { Navigation, NavigationItem } from '../../../Navigation';
import { Text } from '../../../Text';

const ProfileNavigation = () => (
  <Navigation aria-label="Profile" direction="vertical">
    <NavigationItem alignmentY="stretch">
      <Flex spacingX="space-500" alignmentX="stretch" alignmentY="center">
        <Avatar isSquare aria-label="Profile of Jiří Bárta">
          <Icon name="profile" boxSize={20} />
        </Avatar>
        <Text elementType="span" size="small" emphasis="semibold">
          My Account
        </Text>
      </Flex>
    </NavigationItem>
  </Navigation>
);
export default ProfileNavigation;
