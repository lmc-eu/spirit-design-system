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
import PaginationLink from '../PaginationLink';

describe('PaginationLink', () => {
  classNamePrefixProviderTest(PaginationLink, 'Pagination__link');

  stylePropsTest(PaginationLink);

  restPropsTest(PaginationLink, 'a');

  validHtmlAttributesTest(PaginationLink);

  ariaAttributesTest(PaginationLink);

  elementTypePropsTest(PaginationLink);

  it('should render page number', () => {
    render(<PaginationLink pageNumber={100} />);

    expect(screen.getByText('100')).toBeInTheDocument();
  });

  it('should render with default accessibility label', () => {
    render(<PaginationLink pageNumber={100} />);

    expect(screen.getByText('Go to page 100')).toBeInTheDocument();
  });

  it('should render with custom accessibility label', () => {
    render(<PaginationLink accessibilityLabel="Test label" pageNumber={100} />);

    expect(screen.getByText('Test label')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
  });

  it('should add aria-current="page" when isCurrent is true', () => {
    render(<PaginationLink pageNumber={1} isCurrent />);

    expect(screen.getByText('Go to page 1').closest('a')).toHaveAttribute('aria-current', 'page');
  });

  it('should not add aria-current when isCurrent is false', () => {
    render(<PaginationLink pageNumber={1} isCurrent={false} />);

    expect(screen.getByText('Go to page 1').closest('a')).not.toHaveAttribute('aria-current');
  });

  it('should not add aria-current when isCurrent is not provided', () => {
    render(<PaginationLink pageNumber={1} />);

    expect(screen.getByText('Go to page 1').closest('a')).not.toHaveAttribute('aria-current');
  });
});
