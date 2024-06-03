import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import HeaderDialogNav from '../HeaderDialogNav';

describe('HeaderDialogNav', () => {
  classNamePrefixProviderTest(HeaderDialogNav, 'HeaderDialogNav');

  stylePropsTest(
    (props) => <HeaderDialogNav {...props} data-testid="header-dialog-nav-test" />,
    'header-dialog-nav-test',
  );

  restPropsTest((props) => <HeaderDialogNav {...props} />, 'ul');

  it('should render text children', () => {
    const dom = render(<HeaderDialogNav id="test">Hello World</HeaderDialogNav>);

    const element = dom.container.querySelector('ul') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });
});
