import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { alignmentXPropsTest } from '../../../../tests/providerTests/dictionaryPropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import CardArtwork from '../CardArtwork';

describe('CardArtwork', () => {
  classNamePrefixProviderTest(CardArtwork, 'CardArtwork');

  stylePropsTest(CardArtwork);

  restPropsTest(CardArtwork, '.CardArtwork');

  alignmentXPropsTest(CardArtwork, 'CardArtwork');

  it('should render artwork card component and have default class name', () => {
    render(<CardArtwork data-testId="test" />);

    expect(screen.getByTestId('test')).toHaveClass('CardArtwork');
  });

  it('should render text children', () => {
    render(<CardArtwork data-testId="test">Hello World</CardArtwork>);

    expect(screen.getByTestId('test')).toHaveTextContent('Hello World');
  });
});
