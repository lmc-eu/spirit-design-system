import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import CardLink from '../CardLink';

describe('CardLink', () => {
  classNamePrefixProviderTest(CardLink, 'CardLink');

  stylePropsTest(CardLink);

  restPropsTest(CardLink, '.CardLink');

  it('should render link card component and have default class name', () => {
    render(<CardLink href="#" />);

    expect(screen.getByRole('link')).toHaveClass('CardLink');
  });

  it('should render text children', () => {
    render(<CardLink href="#">Hello World</CardLink>);

    expect(screen.getByRole('link')).toHaveTextContent('Hello World');
  });
});
