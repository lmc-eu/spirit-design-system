import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import HeaderDesktopActions from '../HeaderDesktopActions';

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
