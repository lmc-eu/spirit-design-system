import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import CardEyebrow from '../CardEyebrow';

describe('CardEyebrow', () => {
  classNamePrefixProviderTest(CardEyebrow, 'CardEyebrow');

  stylePropsTest(CardEyebrow);

  restPropsTest(CardEyebrow, '.CardEyebrow');

  it('should render eyebrow card component and have default class name', () => {
    render(<CardEyebrow data-testId="test" />);

    expect(screen.getByTestId('test')).toHaveClass('CardEyebrow');
  });

  it('should render text children', () => {
    render(<CardEyebrow data-testId="test">Hello World</CardEyebrow>);

    expect(screen.getByTestId('test')).toHaveTextContent('Hello World');
  });
});