import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import Card from '../Card';

describe('Card', () => {
  classNamePrefixProviderTest(Card, 'Card');

  stylePropsTest(Card);

  restPropsTest(Card, 'article');

  it('should render card component and have default class names', () => {
    render(<Card />);

    expect(screen.getByRole('article')).toHaveClass('Card Card--vertical');
  });

  it('should render custom element', () => {
    render(<Card elementType="section" data-testid="test" />);

    expect(screen.getByTestId('test')).toContainHTML('section');
  });

  it('should render boxed card', () => {
    render(<Card isBoxed />);

    expect(screen.getByRole('article')).toHaveClass('Card--boxed');
  });

  it('should render horizontal card', () => {
    render(<Card direction="horizontal" />);

    expect(screen.getByRole('article')).toHaveClass('Card--horizontal');
  });

  it('should render horizontal reversed card', () => {
    render(<Card direction="horizontal-reversed" />);

    expect(screen.getByRole('article')).toHaveClass('Card--horizontalReversed');
  });

  it('should render text children', () => {
    render(<Card>Hello World</Card>);

    expect(screen.getByRole('article')).toHaveTextContent('Hello World');
  });
});
