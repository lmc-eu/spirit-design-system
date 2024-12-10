import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import HeaderNav from '../HeaderNav';

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
