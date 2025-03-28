import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import EmptyState from '../EmptyState';

describe('EmptyState', () => {
  classNamePrefixProviderTest(EmptyState, 'EmptyState');

  stylePropsTest(EmptyState);

  restPropsTest(EmptyState, 'div');

  beforeEach(() => {
    render(<EmptyState>Content</EmptyState>);
  });

  it('should have default classname', () => {
    expect(screen.getByText('Content')).toHaveClass('EmptyState');
  });

  it('should render children', () => {
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
