import React from 'react';
import { Collapse, useCollapse } from '../../Collapse';
import { Icon } from '../../Icon';
import Navigation from '../Navigation';
import NavigationAction from '../NavigationAction';
import NavigationItem from '../NavigationItem';

const NavigationVerticalWithCollapse = () => {
  const { isOpen, toggleHandler } = useCollapse(true);

  return (
    <Navigation aria-label="Vertical Navigation With Collapse" direction="vertical">
      <NavigationItem>
        <NavigationAction href="/">Link</NavigationAction>
      </NavigationItem>
      <NavigationItem>
        <NavigationAction elementType="button" onClick={toggleHandler} aria-expanded="true" isSelected>
          Menu
          <Icon name={`chevron-${isOpen ? 'up' : 'down'}`} size="small" />
        </NavigationAction>
        <Collapse id="collapse-navigation" isOpen={isOpen}>
          <ul>
            <NavigationItem>
              <NavigationAction href="/">Nested Link</NavigationAction>
            </NavigationItem>
            <NavigationItem>
              <NavigationAction href="/" isSelected aria-current="page">
                Nested Selected
              </NavigationAction>
            </NavigationItem>
          </ul>
        </Collapse>
      </NavigationItem>
    </Navigation>
  );
};
export default NavigationVerticalWithCollapse;
