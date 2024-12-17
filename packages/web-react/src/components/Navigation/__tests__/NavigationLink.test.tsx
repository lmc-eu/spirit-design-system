import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import NavigationLink from '../NavigationLink';

describe('NavigationLink', () => {
  classNamePrefixProviderTest(NavigationLink, 'NavigationLink');

  stylePropsTest(NavigationLink);

  restPropsTest(NavigationLink, 'a');

  it('should have default classname', () => {
    render(<NavigationLink href="/">Content</NavigationLink>);

    expect(screen.getByRole('link')).toHaveClass('NavigationLink');
  });

  it('should have selected classname', () => {
    render(
      <NavigationLink href="/" isSelected>
        Content
      </NavigationLink>,
    );

    expect(screen.getByRole('link')).toHaveClass('NavigationLink NavigationLink--selected');
  });

  it('should have disabled classname and correct elementType', () => {
    render(
      <NavigationLink href="/" isDisabled>
        Content
      </NavigationLink>,
    );

    expect(screen.getByText('Content')).toHaveClass('NavigationLink NavigationLink--disabled');
    expect(screen.getByText('Content')).toContainHTML('span');
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('should render children', () => {
    render(<NavigationLink href="/">Content</NavigationLink>);

    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
