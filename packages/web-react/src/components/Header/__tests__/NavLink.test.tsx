import '@testing-library/jest-dom';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { renderWithHeaderContext, withHeader } from '../../../../tests/testUtils';
import NavLink from '../NavLink';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';

describe('NavLink', () => {
  classNamePrefixProviderTest(
    withHeader(() => <NavLink href="/" data-testid="navlink-test" />),
    'Header__link',
    'navlink-test',
  );

  stylePropsTest(
    withHeader((props) => <NavLink href="/" {...props} data-testid="navlink-test" />),
    'navlink-test',
  );

  restPropsTest(
    withHeader((props) => <NavLink href="/" {...props} />),
    'a',
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
