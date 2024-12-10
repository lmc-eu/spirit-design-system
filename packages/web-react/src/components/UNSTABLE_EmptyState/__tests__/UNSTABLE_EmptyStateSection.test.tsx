import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import UNSTABLE_EmptyStateSection from '../UNSTABLE_EmptyStateSection';

describe('UNSTABLE_EmptyStateSection', () => {
  classNamePrefixProviderTest(UNSTABLE_EmptyStateSection, 'UNSTABLE_EmptyState__section');

  stylePropsTest(UNSTABLE_EmptyStateSection);

  restPropsTest(UNSTABLE_EmptyStateSection, 'div');

  beforeEach(() => {
    render(<UNSTABLE_EmptyStateSection>Content</UNSTABLE_EmptyStateSection>);
  });

  it('should have default classname', () => {
    expect(screen.getByText('Content')).toHaveClass('UNSTABLE_EmptyState__section');
  });

  it('should render children', () => {
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
