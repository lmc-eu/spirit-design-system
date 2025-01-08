import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import UNSTABLE_Header from '../UNSTABLE_Header';

describe('UNSTABLE_Header', () => {
  classNamePrefixProviderTest(UNSTABLE_Header, 'UNSTABLE_Header');

  stylePropsTest(UNSTABLE_Header);

  restPropsTest(UNSTABLE_Header, 'header');

  it('should have default classname', () => {
    render(<UNSTABLE_Header>Content</UNSTABLE_Header>);

    const header = screen.getByRole('banner');

    expect(header).toHaveClass('UNSTABLE_Header');
  });
});
