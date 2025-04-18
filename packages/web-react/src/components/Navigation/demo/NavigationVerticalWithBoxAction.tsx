import React from 'react';
import Navigation from '../Navigation';
import NavigationAction from '../NavigationAction';
import NavigationItem from '../NavigationItem';

const NavigationVerticalWithBoxAction = () => {
  return (
    <Navigation aria-label="Main Navigation" direction="vertical">
      <NavigationItem>
        <NavigationAction href="/">Link</NavigationAction>
      </NavigationItem>
      <NavigationItem>
        <NavigationAction href="/" aria-current="page" isSelected>
          Selected
        </NavigationAction>
      </NavigationItem>
      <NavigationItem>
        <NavigationAction href="/" isDisabled>
          Disabled
        </NavigationAction>
      </NavigationItem>
    </Navigation>
  );
};
export default NavigationVerticalWithBoxAction;
