import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
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

  it('should render text children', () => {
    const dom = render(<PaginationLink pageNumber={100} />);
    const element = dom.container.querySelector('.Pagination__link') as HTMLElement;
    const visibleSpan = element.querySelector('span[aria-hidden="true"]') as HTMLElement;

    expect(visibleSpan?.textContent).toBe('100');
  });

  it('should render text children with accessibility label', () => {
    const dom = render(<PaginationLink accessibilityLabel="Test label" pageNumber={100} />);
    const element = dom.container.querySelector('.Pagination__link') as HTMLElement;
    const visibleSpan = element.querySelector('span[aria-hidden="true"]') as HTMLElement;
    const hiddenLabel = element.querySelector('.accessibility-hidden') as HTMLElement;

    expect(visibleSpan?.textContent).toBe('100');
    expect(hiddenLabel?.textContent).toBe('Test label');
  });

  it('should add aria-current="page" when isCurrent is true', () => {
    const dom = render(<PaginationLink pageNumber={1} isCurrent />);
    const element = dom.container.querySelector('.Pagination__link') as HTMLElement;

    expect(element).toHaveAttribute('aria-current', 'page');
  });

  it('should not add aria-current when isCurrent is false', () => {
    const dom = render(<PaginationLink pageNumber={1} isCurrent={false} />);
    const element = dom.container.querySelector('.Pagination__link') as HTMLElement;

    expect(element).not.toHaveAttribute('aria-current');
  });

  it('should not add aria-current when isCurrent is not provided', () => {
    const dom = render(<PaginationLink pageNumber={1} />);
    const element = dom.container.querySelector('.Pagination__link') as HTMLElement;

    expect(element).not.toHaveAttribute('aria-current');
  });
});
