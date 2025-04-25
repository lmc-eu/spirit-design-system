import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import {
  ariaAttributesTest,
  classNamePrefixProviderTest,
  restPropsTest,
  stylePropsTest,
  validHtmlAttributesTest,
} from '@local/tests';
import PaginationItem from '../PaginationItem';

describe('PaginationItem', () => {
  classNamePrefixProviderTest(PaginationItem, 'Pagination__item');

  stylePropsTest(PaginationItem);

  restPropsTest(PaginationItem, 'li');

  validHtmlAttributesTest(PaginationItem);

  ariaAttributesTest(PaginationItem);

  it('should render text children', () => {
    const dom = render(<PaginationItem>Hello World</PaginationItem>);
    const element = dom.container.querySelector('.Pagination__item') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });
});
