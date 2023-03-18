import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import HeaderNavItem from '../HeaderNavItem';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';

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
