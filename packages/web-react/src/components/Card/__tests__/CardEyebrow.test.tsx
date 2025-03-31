import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest, validHtmlAttributesTest } from '@local/tests';
import CardEyebrow from '../CardEyebrow';

describe('CardEyebrow', () => {
  classNamePrefixProviderTest(CardEyebrow, 'CardEyebrow');

  stylePropsTest(CardEyebrow);

  restPropsTest(CardEyebrow, '.CardEyebrow');

  validHtmlAttributesTest(CardEyebrow);

  it('should render eyebrow card component and have default class name', () => {
    render(<CardEyebrow data-testid="test" />);

    expect(screen.getByTestId('test')).toHaveClass('CardEyebrow');
  });

  it('should render text children', () => {
    render(<CardEyebrow data-testid="test">Hello World</CardEyebrow>);

    expect(screen.getByTestId('test')).toHaveTextContent('Hello World');
  });
});
