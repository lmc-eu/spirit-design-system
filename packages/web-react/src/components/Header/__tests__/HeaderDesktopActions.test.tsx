import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
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
    render(<HeaderDesktopActions id="test">Hello World</HeaderDesktopActions>);

    expect(screen.getByRole('navigation')).toHaveTextContent('Hello World');
  });

  it('should have isAtEnd class', () => {
    render(<HeaderDesktopActions isAtEnd />);

    expect(screen.getByRole('navigation')).toHaveClass('HeaderDesktopActions--end');
  });
});
