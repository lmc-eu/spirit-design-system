import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, sizePropsTest, restPropsTest, stylePropsTest } from '@local/tests';
import CardMedia from '../CardMedia';

describe('CardMedia', () => {
  classNamePrefixProviderTest(CardMedia, 'CardMedia');

  stylePropsTest(CardMedia);

  restPropsTest(CardMedia, '.CardMedia');

  sizePropsTest(CardMedia);

  it('should render media card media component and have default class names', () => {
    render(<CardMedia data-testId="test" />);

    expect(screen.getByTestId('test')).toHaveClass('CardMedia CardMedia--auto');
  });

  it('should render auto size', () => {
    render(<CardMedia size="auto" data-testId="test" />);

    expect(screen.getByTestId('test')).toHaveClass('CardMedia--auto');
  });

  it('should fill the height', () => {
    render(<CardMedia hasFilledHeight data-testId="test" />);

    expect(screen.getByTestId('test')).toHaveClass('CardMedia--filledHeight');
  });

  it('should render image', () => {
    render(
      <CardMedia>
        <img src="image.png" alt="description" />
      </CardMedia>,
    );

    const image = screen.getByRole('img');

    expect(image).toHaveAttribute('src', 'image.png');
    expect(image).toHaveAttribute('alt', 'description');
    expect(image.parentElement).toHaveClass('CardMedia__canvas');
  });
});
