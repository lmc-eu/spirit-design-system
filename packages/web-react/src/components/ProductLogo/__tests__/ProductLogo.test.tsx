import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import ProductLogo from '../ProductLogo';

describe('ProductLogo', () => {
  classNamePrefixProviderTest(ProductLogo, 'ProductLogo');

  stylePropsTest(ProductLogo);

  restPropsTest(ProductLogo, 'div');

  it('should render children', () => {
    render(<ProductLogo>Content</ProductLogo>);

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('should have correct className', () => {
    render(<ProductLogo>Content</ProductLogo>);

    expect(screen.getByText('Content')).toHaveClass('ProductLogo');
  });
});
