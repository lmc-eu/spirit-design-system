import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import CardTitle from '../CardTitle';

describe('CardTitle', () => {
  classNamePrefixProviderTest(CardTitle, 'CardTitle');

  stylePropsTest(CardTitle);

  restPropsTest(CardTitle, '.CardTitle');

  it('should render title card component and have default class names', () => {
    render(<CardTitle data-testid="test" />);

    expect(screen.getByTestId('test')).toHaveClass('CardTitle CardTitle--heading');
  });

  it('should render custom element', () => {
    render(<CardTitle elementType="h1" data-testid="test" />);

    expect(screen.getByTestId('test')).toContainHTML('h1');
  });

  it('should render as heading', () => {
    render(<CardTitle isHeading data-testid="test" />);

    expect(screen.getByTestId('test')).toHaveClass('CardTitle--heading');
  });

  it('should render text children', () => {
    render(<CardTitle data-testid="test">Hello World</CardTitle>);

    expect(screen.getByTestId('test')).toHaveTextContent('Hello World');
  });
});
