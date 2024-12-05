import React from 'react';
import { Button } from '../../Button';
import Navigation from '../Navigation';
import NavigationItem from '../NavigationItem';

const NavigationDefault = () => {
  return (
    <div style={{ '--spirit-header-height': '72px' } as React.CSSProperties}>
      <Navigation>
        <NavigationItem>
          <Button elementType="a" href="#">
            Button
          </Button>
        </NavigationItem>
        <NavigationItem>
          <Button elementType="a" href="#" color="secondary">
            Button
          </Button>
        </NavigationItem>
      </Navigation>
    </div>
  );
};
export default NavigationDefault;
