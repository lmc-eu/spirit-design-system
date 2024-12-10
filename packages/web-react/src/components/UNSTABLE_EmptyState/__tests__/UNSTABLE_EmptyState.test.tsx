import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import UNSTABLE_EmptyState from '../UNSTABLE_EmptyState';

describe('UNSTABLE_EmptyState', () => {
  classNamePrefixProviderTest(UNSTABLE_EmptyState, 'UNSTABLE_EmptyState');

  stylePropsTest(UNSTABLE_EmptyState);

  restPropsTest(UNSTABLE_EmptyState, 'div');

  beforeEach(() => {
    render(<UNSTABLE_EmptyState>Content</UNSTABLE_EmptyState>);
  });

  it('should have default classname', () => {
    expect(screen.getByText('Content')).toHaveClass('UNSTABLE_EmptyState');
  });

  it('should render children', () => {
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
