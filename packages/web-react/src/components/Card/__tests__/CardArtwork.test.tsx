import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  alignmentXPropsTest,
  ariaAttributesTest,
  classNamePrefixProviderTest,
  restPropsTest,
  stylePropsTest,
  validHtmlAttributesTest,
} from '@local/tests';
import CardArtwork from '../CardArtwork';

describe('CardArtwork', () => {
  classNamePrefixProviderTest(CardArtwork, 'CardArtwork');

  stylePropsTest(CardArtwork);

  restPropsTest(CardArtwork, '.CardArtwork');

  alignmentXPropsTest(CardArtwork, 'CardArtwork');

  validHtmlAttributesTest(CardArtwork);

  ariaAttributesTest(CardArtwork);

  it('should render artwork card component and have default class name', () => {
    render(<CardArtwork data-testid="test" />);

    expect(screen.getByTestId('test')).toHaveClass('CardArtwork');
  });

  it('should render text children', () => {
    render(<CardArtwork data-testid="test">Hello World</CardArtwork>);

    expect(screen.getByTestId('test')).toHaveTextContent('Hello World');
  });
});
