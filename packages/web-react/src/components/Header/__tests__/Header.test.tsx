import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import Header from '../Header';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';

describe('Header', () => {
  classNamePrefixProviderTest(Header, 'Header');

  stylePropsTest((props) => <Header {...props} data-testid="header-test" />, 'header-test');

  restPropsTest((props) => <Header {...props} />, 'header');

  it('should render text children', () => {
    const dom = render(<Header id="test">Hello World</Header>);

    const element = dom.container.querySelector('header') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });
});
