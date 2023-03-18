import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import HeaderDesktopActions from '../HeaderDesktopActions';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';

describe('HeaderDesktopActions', () => {
  classNamePrefixProviderTest(HeaderDesktopActions, 'HeaderDesktopActions');

  stylePropsTest(
    (props) => <HeaderDesktopActions {...props} data-testid="header-desktop-actions-test" />,
    'header-desktop-actions-test',
  );

  restPropsTest((props) => <HeaderDesktopActions {...props} />, 'nav');

  it('should render text children', () => {
    const dom = render(<HeaderDesktopActions id="test">Hello World</HeaderDesktopActions>);

    const element = dom.container.querySelector('nav') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });
});
