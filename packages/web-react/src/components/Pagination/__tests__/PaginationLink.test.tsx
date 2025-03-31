import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest, validHtmlAttributesTest } from '@local/tests';
import PaginationLink from '../PaginationLink';

describe('PaginationLink', () => {
  classNamePrefixProviderTest(PaginationLink, 'Pagination__link');

  stylePropsTest(PaginationLink);

  restPropsTest(PaginationLink, 'a');

  validHtmlAttributesTest(PaginationLink);

  it('should render text children', () => {
    const dom = render(<PaginationLink accessibilityLabel="" pageNumber={100} />);
    const element = dom.container.querySelector('.Pagination__link') as HTMLElement;

    expect(element.textContent).toBe('100');
  });

  it('should render text children with accessibility label', () => {
    const dom = render(<PaginationLink accessibilityLabel="Test label" pageNumber={100} />);
    const element = dom.container.querySelector('.Pagination__link') as HTMLElement;

    expect(element.textContent).toBe('Test label100');
  });
});
