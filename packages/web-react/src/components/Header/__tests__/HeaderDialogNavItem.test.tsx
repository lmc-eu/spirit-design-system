import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import HeaderDialogNavItem from '../HeaderDialogNavItem';

describe('HeaderDialogNavItem', () => {
  classNamePrefixProviderTest(HeaderDialogNavItem, 'HeaderDialogNavItem');

  stylePropsTest(
    (props) => <HeaderDialogNavItem {...props} data-testid="header-dialog-nav-item-test" />,
    'header-dialog-nav-item-test',
  );

  restPropsTest((props) => <HeaderDialogNavItem {...props} />, 'li');

  it('should render text children', () => {
    const dom = render(<HeaderDialogNavItem id="test">Hello World</HeaderDialogNavItem>);

    const element = dom.container.querySelector('li') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });
});
