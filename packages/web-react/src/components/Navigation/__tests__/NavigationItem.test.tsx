import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import NavigationItem from '../NavigationItem';

describe('NavigationItem', () => {
  classNamePrefixProviderTest(NavigationItem, 'NavigationItem');

  stylePropsTest(NavigationItem);

  restPropsTest(NavigationItem, 'li');

  it('should have default classname', () => {
    render(<NavigationItem>Content</NavigationItem>);

    expect(screen.getByRole('listitem')).toHaveClass('NavigationItem NavigationItem--alignmentYCenter');
  });

  it('should have stretch alignment classname', () => {
    render(<NavigationItem alignmentY="stretch">Content</NavigationItem>);

    expect(screen.getByRole('listitem')).toHaveClass('NavigationItem--alignmentYStretch');
  });

  it('should have correct role', () => {
    render(<NavigationItem>Content</NavigationItem>);

    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });

  it('should render children', () => {
    render(<NavigationItem>Content</NavigationItem>);

    expect(screen.getByRole('listitem')).toHaveTextContent('Content');
  });
});
