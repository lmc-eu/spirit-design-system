import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import HeaderDialogNav from '../HeaderDialogNav';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';

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
