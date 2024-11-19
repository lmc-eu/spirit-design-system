import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import CardLogo from '../CardLogo';

describe('CardLogo', () => {
  classNamePrefixProviderTest(CardLogo, 'CardLogo');

  stylePropsTest(CardLogo);

  restPropsTest(CardLogo, '.CardLogo');

  it('should render logo card component and have default class name', () => {
    render(<CardLogo data-testId="test" />);

    expect(screen.getByTestId('test')).toHaveClass('CardLogo');
  });

  it('should render text children', () => {
    render(<CardLogo data-testId="test">Hello World</CardLogo>);

    expect(screen.getByTestId('test')).toHaveTextContent('Hello World');
  });
});
