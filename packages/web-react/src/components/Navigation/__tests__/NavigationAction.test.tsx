import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import NavigationAction from '../NavigationAction';

describe('NavigationAction', () => {
  classNamePrefixProviderTest(NavigationAction, 'NavigationAction');

  stylePropsTest(NavigationAction);

  restPropsTest(NavigationAction, 'a');

  it('should have default classname', () => {
    render(<NavigationAction href="/">Content</NavigationAction>);

    expect(screen.getByRole('link')).toHaveClass('NavigationAction');
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
});
