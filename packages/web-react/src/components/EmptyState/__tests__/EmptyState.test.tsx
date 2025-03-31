import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  classNamePrefixProviderTest,
  elementTypePropsTest,
  restPropsTest,
  stylePropsTest,
  validHtmlAttributesTest,
} from '@local/tests';
import EmptyState from '../EmptyState';

describe('EmptyState', () => {
  classNamePrefixProviderTest(EmptyState, 'EmptyState');

  stylePropsTest(EmptyState);

  restPropsTest(EmptyState, 'div');

  validHtmlAttributesTest(EmptyState);

  elementTypePropsTest(EmptyState);

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
