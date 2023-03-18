import '@testing-library/jest-dom';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../../tests/providerTests/classNamePrefixProviderTest';
import { renderWithHeaderContext, withHeader } from '../../../../../tests/testUtils';
import Nav from '../Nav';
import { stylePropsTest } from '../../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../../tests/providerTests/restPropsTest';

describe('Nav', () => {
  classNamePrefixProviderTest(
    withHeader(() => <Nav data-testid="nav-test">Hello World</Nav>),
    'Header__nav',
    'nav-test',
  );

  stylePropsTest(
    withHeader((props) => (
      <Nav {...props} data-testid="nav-test">
        Hello World
      </Nav>
    )),
    'nav-test',
  );

  restPropsTest(
    withHeader((props) => <Nav {...props}>Hello World</Nav>),
    'ul',
  );

  it('should render text children', () => {
    const component = () => <Nav>Hello World</Nav>;
    const dom = renderWithHeaderContext(component);

    const element = dom.container.firstChild as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });
});
