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

  beforeEach(() => {
    render(
      <Navigation>
        <li>Content</li>
      </Navigation>,
    );
  });

  it('should have default classname', () => {
    expect(screen.getByRole('navigation')).toHaveClass('Navigation');
  });

  it('should render list and children', () => {
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('should render children', () => {
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
