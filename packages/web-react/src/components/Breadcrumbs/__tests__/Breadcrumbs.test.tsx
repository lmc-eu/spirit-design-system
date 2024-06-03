import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import Breadcrumbs from '../Breadcrumbs';

describe('Breadcrumbs', () => {
  classNamePrefixProviderTest(Breadcrumbs, 'Breadcrumbs');

  stylePropsTest(Breadcrumbs);

  restPropsTest(Breadcrumbs, 'nav');

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
