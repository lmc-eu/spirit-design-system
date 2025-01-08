import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import UNSTABLE_HeaderLogo from '../UNSTABLE_HeaderLogo';

describe('UNSTABLE_HeaderLogo', () => {
  classNamePrefixProviderTest(UNSTABLE_HeaderLogo, 'UNSTABLE_HeaderLogo');

  stylePropsTest(UNSTABLE_HeaderLogo);

  restPropsTest(UNSTABLE_HeaderLogo, 'a');

  it('should have default classname', () => {
    render(<UNSTABLE_HeaderLogo href="#">Content</UNSTABLE_HeaderLogo>);

    expect(screen.getByRole('link')).toHaveClass('UNSTABLE_HeaderLogo');
  });

  it('should render children', () => {
    render(<UNSTABLE_HeaderLogo href="#">Content</UNSTABLE_HeaderLogo>);

    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
