import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import {
  classNamePrefixProviderTest,
  elementTypePropsTest,
  restPropsTest,
  stylePropsTest,
  validHtmlAttributesTest,
} from '@local/tests';
import Breadcrumbs from '../Breadcrumbs';

jest.mock('../../../hooks/useIcon');

describe('Breadcrumbs', () => {
  classNamePrefixProviderTest(Breadcrumbs, 'Breadcrumbs');

  stylePropsTest(Breadcrumbs);

  restPropsTest(Breadcrumbs, 'nav');

  validHtmlAttributesTest(Breadcrumbs);
  elementTypePropsTest(Breadcrumbs);

  it('should render breadcrumbs with go back title', () => {
    const dom = render(
      <Breadcrumbs
        items={[
          { title: 'test', url: '/test' },
          { title: 'test_2', url: '/test_2' },
        ]}
        goBackTitle="test_title"
      />,
    );

    const element = dom.container.querySelectorAll('ol > li > a')[0] as HTMLElement;

    expect(element).toHaveTextContent('test_title');
  });
});
