import '@testing-library/jest-dom';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { renderWithHeaderContext, withHeader } from '../../../../tests/testUtils';
import { HeaderContextType } from '../HeaderContext';
import Navbar, { NavbarVariant } from '../Navbar';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';

describe('Navbar', () => {
  classNamePrefixProviderTest(
    withHeader(() => <Navbar data-testid="navbar-test" />),
    'Header__bar',
    'navbar-test',
  );

  stylePropsTest(
    withHeader((props) => <Navbar {...props} data-testid="navbar-test" />),
    'navbar-test',
  );

  restPropsTest(
    withHeader((props) => <Navbar {...props} />),
    'nav',
  );

  it('should render text children', () => {
    const component = () => <Navbar>Hello World</Navbar>;
    const dom = renderWithHeaderContext(component);

    const element = dom.container.firstChild as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });

  it('should render open class', () => {
    const component = () => <Navbar data-testid="navbar">Hello World</Navbar>;
    const dom = renderWithHeaderContext(component, { headerClass: 'Header', isExpanded: true } as HeaderContextType);

    const element = dom.getByTestId('navbar') as HTMLElement;
    expect(element).toHaveClass('is-open');
  });

  it.each(['bar', 'dialog'])('should render variant class %s', (variant) => {
    const component = () => (
      <Navbar variant={variant as NavbarVariant} data-testid="navbar">
        Hello World
      </Navbar>
    );
    const dom = renderWithHeaderContext(component, { headerClass: 'Header', isExpanded: true } as HeaderContextType);

    const element = dom.getByTestId('navbar') as HTMLElement;
    expect(element).toHaveClass(`Header__${variant}`);
  });
});
