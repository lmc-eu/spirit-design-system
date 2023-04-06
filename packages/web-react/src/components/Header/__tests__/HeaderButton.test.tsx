import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import HeaderButton from '../HeaderButton';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';

describe('HeaderButton', () => {
  classNamePrefixProviderTest(HeaderButton, 'HeaderLink');

  stylePropsTest((props) => <HeaderButton {...props} data-testid="header-button-test" />, 'header-button-test');

  restPropsTest((props) => <HeaderButton {...props} />, 'button');

  it('should render text children', () => {
    const dom = render(<HeaderButton id="test">Hello World</HeaderButton>);

    const element = dom.container.querySelector('button') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });
});
