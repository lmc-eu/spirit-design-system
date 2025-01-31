import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import NavigationAction from '../NavigationAction';

describe('NavigationAction', () => {
  classNamePrefixProviderTest(NavigationAction, 'NavigationAction');

  stylePropsTest(NavigationAction);

  restPropsTest(NavigationAction, 'a');

  it('should have default classname', () => {
    render(<NavigationAction href="/">Content</NavigationAction>);

    const navigationAction = screen.getByRole('link');

    expect(navigationAction).toHaveClass('NavigationAction');
    expect(navigationAction).toHaveClass('NavigationAction--box');
  });

  it('should have selected classname', () => {
    render(
      <NavigationAction href="/" isSelected>
        Content
      </NavigationAction>,
    );

    expect(screen.getByRole('link')).toHaveClass('NavigationAction NavigationAction--selected');
  });

  it('should have disabled classname and correct elementType', () => {
    render(
      <NavigationAction href="/" isDisabled>
        Content
      </NavigationAction>,
    );

    expect(screen.getByText('Content')).toHaveClass('NavigationAction NavigationAction--disabled');
    expect(screen.getByText('Content')).toContainHTML('span');
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('should render children', () => {
    render(<NavigationAction href="/">Content</NavigationAction>);

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('should have correct className for pill variant', () => {
    render(
      <NavigationAction href="/" variant="pill">
        Content
      </NavigationAction>,
    );

    const navigationAction = screen.getByRole('link');

    expect(navigationAction).toHaveClass('NavigationAction');
    expect(navigationAction).toHaveClass('NavigationAction--pill');
  });
});
