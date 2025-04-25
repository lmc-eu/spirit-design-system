import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  ariaAttributesTest,
  classNamePrefixProviderTest,
  elementTypePropsTest,
  restPropsTest,
  stylePropsTest,
  validHtmlAttributesTest,
} from '@local/tests';
import CardLink from '../CardLink';

describe('CardLink', () => {
  classNamePrefixProviderTest(CardLink, 'CardLink');

  stylePropsTest(CardLink);

  restPropsTest(CardLink, '.CardLink');

  validHtmlAttributesTest(CardLink);

  ariaAttributesTest(CardLink);

  elementTypePropsTest(CardLink);

  it('should render link card component and have default class name', () => {
    render(<CardLink href="#" />);

    expect(screen.getByRole('link')).toHaveClass('CardLink');
  });

  it('should render text children', () => {
    render(<CardLink href="#">Hello World</CardLink>);

    expect(screen.getByRole('link')).toHaveTextContent('Hello World');
  });
});
