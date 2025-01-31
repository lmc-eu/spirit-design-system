import React from 'react';
import Navigation from '../Navigation';
import NavigationAction from '../NavigationAction';
import NavigationItem from '../NavigationItem';

const NavigationHorizontalWithPillAction = () => {
  return (
    <Navigation aria-label="Main Navigation">
      <NavigationItem>
        <NavigationAction href="/" variant="pill">
          Link
        </NavigationAction>
      </NavigationItem>
      <NavigationItem>
        <NavigationAction href="/" variant="pill" aria-current="page" isSelected>
          Selected
        </NavigationAction>
      </NavigationItem>
      <NavigationItem>
        <NavigationAction href="/" variant="pill" isDisabled>
          Disabled
        </NavigationAction>
      </NavigationItem>
    </Navigation>
  );
};
export default NavigationHorizontalWithPillAction;
