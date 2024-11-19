import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import CardTitle from '../CardTitle';

describe('CardTitle', () => {
  classNamePrefixProviderTest(CardTitle, 'CardTitle');

  stylePropsTest(CardTitle);

  restPropsTest(CardTitle, '.CardTitle');

  it('should render title card component and have default class names', () => {
    render(<CardTitle data-testId="test" />);

    expect(screen.getByTestId('test')).toHaveClass('CardTitle CardTitle--heading');
  });

  it('should render custom element', () => {
    render(<CardTitle elementType="h1" data-testId="test" />);

    expect(screen.getByTestId('test')).toContainHTML('h1');
  });

  it('should render as heading', () => {
    render(<CardTitle isHeading data-testId="test" />);

    expect(screen.getByTestId('test')).toHaveClass('CardTitle--heading');
  });

  it('should render text children', () => {
    render(<CardTitle data-testId="test">Hello World</CardTitle>);

    expect(screen.getByTestId('test')).toHaveTextContent('Hello World');
  });
});
