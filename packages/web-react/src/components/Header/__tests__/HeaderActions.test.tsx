import '@testing-library/jest-dom';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { renderWithHeaderContext, withHeader } from '../../../../tests/testUtils';
import HeaderActions from '../HeaderActions';

describe('HeaderActions', () => {
  classNamePrefixProviderTest(
    withHeader(() => <HeaderActions data-testid="header-actions-test">Hello World</HeaderActions>),
    'Header__actions',
    'header-actions-test',
  );

  it('should render text children', () => {
    const component = () => <HeaderActions>Hello World</HeaderActions>;
    const dom = renderWithHeaderContext(component);

    const element = dom.container.firstChild as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });
});
