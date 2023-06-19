import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import PaginationItem from '../PaginationItem';

describe('PaginationItem', () => {
  classNamePrefixProviderTest(PaginationItem, 'Pagination__item');

  stylePropsTest(PaginationItem);

  restPropsTest(PaginationItem, 'li');

  it('should render text children', () => {
    const dom = render(<PaginationItem>Hello World</PaginationItem>);
    const element = dom.container.querySelector('.Pagination__item') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });
});
