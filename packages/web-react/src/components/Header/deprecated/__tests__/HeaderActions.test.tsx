import '@testing-library/jest-dom';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../../tests/providerTests/classNamePrefixProviderTest';
import { renderWithHeaderContext, withHeader } from '../../../../../tests/testUtils';
import HeaderActions from '../HeaderActions';
import { stylePropsTest } from '../../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../../tests/providerTests/restPropsTest';

describe('HeaderActions', () => {
  classNamePrefixProviderTest(
    withHeader(() => <HeaderActions data-testid="header-actions-test">Hello World</HeaderActions>),
    'Header__actions',
    'header-actions-test',
  );

  stylePropsTest(
    withHeader((props) => (
      <HeaderActions {...props} data-testid="header-actions-test">
        Hello World
      </HeaderActions>
    )),
    'header-actions-test',
  );

  restPropsTest(
    withHeader((props) => <HeaderActions {...props}>Hello World</HeaderActions>),
    'div',
  );

  it('should render text children', () => {
    const component = () => <HeaderActions>Hello World</HeaderActions>;
    const dom = renderWithHeaderContext(component);

    const element = dom.container.firstChild as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });
});
