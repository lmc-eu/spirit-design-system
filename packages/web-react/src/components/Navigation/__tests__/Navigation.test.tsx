import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import Navigation from '../Navigation';

describe('Navigation', () => {
  classNamePrefixProviderTest(Navigation, 'Navigation');

  stylePropsTest(Navigation);

  restPropsTest(Navigation, 'nav');

  it('should have default classname', () => {
    render(<Navigation>Content</Navigation>);

    expect(screen.getByRole('navigation')).toHaveClass('Navigation');
  });

  it('should render list and children', () => {
    render(<Navigation>Content</Navigation>);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
