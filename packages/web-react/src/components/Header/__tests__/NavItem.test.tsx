import '@testing-library/jest-dom';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { renderWithHeaderContext, withHeader } from '../../../../tests/testUtils';
import NavItem from '../NavItem';

describe('NavItem', () => {
  classNamePrefixProviderTest(
    withHeader(() => <NavItem data-testid="navitem-test">Hello World</NavItem>),
    'Header__navItem',
    'navitem-test',
  );

  it('should render text children', () => {
    const component = () => <NavItem>Hello World</NavItem>;
    const dom = renderWithHeaderContext(component);

    const element = dom.container.firstChild as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });
});
