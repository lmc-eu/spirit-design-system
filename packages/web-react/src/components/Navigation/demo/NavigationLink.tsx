import React from 'react';
import Navigation from '../Navigation';
import NavigationItem from '../NavigationItem';
import NavigationLink from '../NavigationLink';

const NavigationDefault = () => {
  return (
    <div style={{ '--spirit-header-height': '72px' } as React.CSSProperties}>
      <Navigation>
        <NavigationItem>
          <NavigationLink href="/">Link</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="/" isSelected>
            Selected
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="/" isDisabled>
            Disabled
          </NavigationLink>
        </NavigationItem>
      </Navigation>
    </div>
  );
};
export default NavigationDefault;
