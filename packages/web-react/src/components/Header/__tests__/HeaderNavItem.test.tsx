import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import HeaderNavItem from '../HeaderNavItem';

describe('HeaderNavItem', () => {
  classNamePrefixProviderTest(HeaderNavItem, 'HeaderNavItem');

  stylePropsTest((props) => <HeaderNavItem {...props} data-testid="header-nav-item-test" />, 'header-nav-item-test');

  restPropsTest((props) => <HeaderNavItem {...props} />, 'li');

  it('should render text children', () => {
    const dom = render(<HeaderNavItem id="test">Hello World</HeaderNavItem>);

    const element = dom.container.querySelector('li') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });
});
