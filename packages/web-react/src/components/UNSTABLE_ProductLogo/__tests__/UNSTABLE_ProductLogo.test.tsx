import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import UNSTABLE_ProductLogo from '../UNSTABLE_ProductLogo';

describe('UNSTABLE_ProductLogo', () => {
  classNamePrefixProviderTest(UNSTABLE_ProductLogo, 'UNSTABLE_ProductLogo');

  stylePropsTest(UNSTABLE_ProductLogo);

  restPropsTest(UNSTABLE_ProductLogo, 'div');

  it('should render children', () => {
    render(<UNSTABLE_ProductLogo>Content</UNSTABLE_ProductLogo>);

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('should have correct className', () => {
    render(<UNSTABLE_ProductLogo>Content</UNSTABLE_ProductLogo>);

    expect(screen.getByText('Content')).toHaveClass('UNSTABLE_ProductLogo');
  });
});
