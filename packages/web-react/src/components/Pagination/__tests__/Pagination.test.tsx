import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import Pagination from '../Pagination';

describe('Pagination', () => {
  classNamePrefixProviderTest(
    (props) => <Pagination {...props} listProps={{ 'data-testid': 'test-pagination-component' }} />,
    'Pagination',
    'test-pagination-component',
  );

  stylePropsTest(
    (props) => <Pagination {...props} data-testid="test-pagination-component" />,
    'test-pagination-component',
  );

  restPropsTest(Pagination, 'nav');

  it('should render text children', () => {
    const dom = render(<Pagination>Hello World</Pagination>);
    const element = dom.container.querySelector('.Pagination') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });
});
