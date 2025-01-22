import React from 'react';
import Navigation from '../Navigation';
import NavigationItem from '../NavigationItem';

const NavigationVertical = () => {
  return (
    <Navigation aria-label="Main Navigation" direction="vertical">
      <NavigationItem>Item</NavigationItem>
    </Navigation>
  );
};
export default NavigationVertical;
