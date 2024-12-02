import React from 'react';
import Navigation from '../Navigation';
import NavigationItem from '../NavigationItem';
import NavigationLink from '../NavigationLink';

const NavigationDefault = () => {
  return (
    <Navigation aria-label="Main Navigation">
      <NavigationItem>
        <NavigationLink href="/">Link</NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink href="/" aria-current="page" isSelected>
          Selected
        </NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink href="/" isDisabled>
          Disabled
        </NavigationLink>
      </NavigationItem>
    </Navigation>
  );
};
export default NavigationDefault;
