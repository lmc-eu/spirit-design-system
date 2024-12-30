import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import DrawerCloseButton from '../DrawerCloseButton';

describe('DrawerCloseButton', () => {
  classNamePrefixProviderTest(DrawerCloseButton, 'DrawerCloseButton');

  stylePropsTest(DrawerCloseButton);

  restPropsTest(DrawerCloseButton, 'button');

  it('should render drawer close button', () => {
    render(<DrawerCloseButton />);

    expect(screen.getByRole('button')).toHaveClass('DrawerCloseButton');
  });

  it('should render with correct class', () => {
    render(<DrawerCloseButton data-testid="test" />);

    expect(screen.getByTestId('test')).toHaveClass('DrawerCloseButton');
  });
});
