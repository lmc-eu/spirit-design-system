import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import NavigationItem from '../NavigationItem';

describe('NavigationItem', () => {
  stylePropsTest(NavigationItem);

  restPropsTest(NavigationItem, 'li');

  it('should have correct role', () => {
    render(<NavigationItem>Content</NavigationItem>);

    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });

  it('should render children', () => {
    render(<NavigationItem>Content</NavigationItem>);

    expect(screen.getByRole('listitem')).toHaveTextContent('Content');
  });
});
