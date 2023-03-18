import '@testing-library/jest-dom';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../../tests/providerTests/classNamePrefixProviderTest';
import { renderWithHeaderContext, withHeader } from '../../../../../tests/testUtils';
import NavItem from '../NavItem';
import { stylePropsTest } from '../../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../../tests/providerTests/restPropsTest';

describe('NavItem', () => {
  classNamePrefixProviderTest(
    withHeader(() => <NavItem data-testid="navitem-test">Hello World</NavItem>),
    'Header__navItem',
    'navitem-test',
  );

  stylePropsTest(
    withHeader((props) => (
      <NavItem {...props} data-testid="navitem-test">
        Hello World
      </NavItem>
    )),
    'navitem-test',
  );

  restPropsTest(
    withHeader((props) => <NavItem {...props}>Hello World</NavItem>),
    'li',
  );

  it('should render text children', () => {
    const component = () => <NavItem>Hello World</NavItem>;
    const dom = renderWithHeaderContext(component);

    const element = dom.container.firstChild as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });
});
