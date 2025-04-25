import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  ariaAttributesTest,
  classNamePrefixProviderTest,
  elementTypePropsTest,
  restPropsTest,
  stylePropsTest,
  validHtmlAttributesTest,
} from '@local/tests';
import EmptyStateSection from '../EmptyStateSection';

describe('EmptyStateSection', () => {
  classNamePrefixProviderTest(EmptyStateSection, 'EmptyState__section');

  stylePropsTest(EmptyStateSection);

  restPropsTest(EmptyStateSection, 'div');

  validHtmlAttributesTest(EmptyStateSection);

  ariaAttributesTest(EmptyStateSection);

  elementTypePropsTest(EmptyStateSection);

  beforeEach(() => {
    render(<EmptyStateSection>Content</EmptyStateSection>);
  });

  it('should have default classname', () => {
    expect(screen.getByText('Content')).toHaveClass('EmptyState__section');
  });

  it('should render children', () => {
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
