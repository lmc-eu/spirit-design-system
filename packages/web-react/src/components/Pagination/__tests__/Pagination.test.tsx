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

  validHtmlAttributesTest(Pagination);

  ariaAttributesTest(Pagination);

  it('should render text children', () => {
    const dom = render(<Pagination>Hello World</Pagination>);
    const element = dom.container.querySelector('.Pagination') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });
});
