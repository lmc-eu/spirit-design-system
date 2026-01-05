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
});
