import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import HeaderNav from '../HeaderNav';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';

describe('HeaderNav', () => {
  classNamePrefixProviderTest(HeaderNav, 'HeaderNav');

  stylePropsTest((props) => <HeaderNav {...props} data-testid="header-nav-test" />, 'header-nav-test');

  restPropsTest((props) => <HeaderNav {...props} />, 'ul');

  it('should render text children', () => {
    const dom = render(<HeaderNav id="test">Hello World</HeaderNav>);

    const element = dom.container.querySelector('ul') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });
});
