import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  ariaAttributesTest,
  classNamePrefixProviderTest,
  restPropsTest,
  sizePropsTest,
  stylePropsTest,
  validHtmlAttributesTest,
} from '@local/tests';
import CardMedia from '../CardMedia';

describe('CardMedia', () => {
  classNamePrefixProviderTest(CardMedia, 'CardMedia');

  stylePropsTest(CardMedia);

  restPropsTest(CardMedia, '.CardMedia');

  sizePropsTest(CardMedia);

  validHtmlAttributesTest(CardMedia);

  ariaAttributesTest(CardMedia);

  it('should render media card media component and have default class names', () => {
    render(<CardMedia data-testid="test" />);

    expect(screen.getByTestId('test')).toHaveClass('CardMedia CardMedia--auto');
  });

  it('should render auto size', () => {
    render(<CardMedia size="auto" data-testid="test" />);

    expect(screen.getByTestId('test')).toHaveClass('CardMedia--auto');
  });

  it('should fill the height', () => {
    render(<CardMedia hasFilledHeight data-testid="test" />);

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

  it('should have default fit value of cover', () => {
    render(<CardMedia data-testid="test" />);

    expect(screen.getByTestId('test')).toHaveStyle({ '--spirit-card-media-object-fit': 'cover' });
  });

  it('should render with custom fit value', () => {
    render(<CardMedia fit="contain" data-testid="test" />);

    expect(screen.getByTestId('test')).toHaveStyle({ '--spirit-card-media-object-fit': 'contain' });
  });

  it('should render with backgroundColor', () => {
    render(<CardMedia backgroundColor="primary" data-testid="test" />);

    expect(screen.getByTestId('test')).toHaveClass('bg-primary');
  });

  it('should render with accent backgroundColor', () => {
    render(<CardMedia backgroundColor="emotion-success-basic" data-testid="test" />);

    expect(screen.getByTestId('test')).toHaveClass('bg-emotion-success-basic');
  });
});
