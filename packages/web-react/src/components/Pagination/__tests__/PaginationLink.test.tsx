import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import PaginationLink from '../PaginationLink';

describe('PaginationLink', () => {
  classNamePrefixProviderTest(PaginationLink, 'Pagination__link');

  stylePropsTest(PaginationLink);

  restPropsTest(PaginationLink, 'a');

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
