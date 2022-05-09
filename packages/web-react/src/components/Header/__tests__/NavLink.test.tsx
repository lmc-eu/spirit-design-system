import '@testing-library/jest-dom';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { renderWithHeaderContext, withHeader } from '../../../../tests/testUtils';
import NavLink from '../NavLink';

describe('NavLink', () => {
  classNamePrefixProviderTest(
    withHeader(() => <NavLink href="/" data-testid="navlink-test" />),
    'Header__link',
    'navlink-test',
  );

  it('should render text children', () => {
    const component = () => <NavLink href="/">Hello World</NavLink>;
    const dom = renderWithHeaderContext(component);

    const element = dom.container.querySelector('a') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });

  it('should render current class', () => {
    const component = () => (
      <NavLink href="/" isCurrent data-testid="navlink-test">
        Hello World
      </NavLink>
    );
    const dom = renderWithHeaderContext(component);

    const element = dom.getByTestId('navlink-test') as HTMLElement;
    expect(element).toHaveClass('Header__link Header__link--current');
  });
});
