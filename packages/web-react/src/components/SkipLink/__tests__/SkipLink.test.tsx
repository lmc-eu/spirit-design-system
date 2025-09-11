import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  ariaAttributesTest,
  classNamePrefixProviderTest,
  restPropsTest,
  stylePropsTest,
  validHtmlAttributesTest,
  elementTypePropsTest,
} from '@local/tests';
import SkipLink from '../SkipLink';

describe('SkipLink', () => {
  classNamePrefixProviderTest(SkipLink, 'SkipLink');

  stylePropsTest(SkipLink);

  restPropsTest(SkipLink, 'a');

  validHtmlAttributesTest(SkipLink);

  ariaAttributesTest(SkipLink);

  elementTypePropsTest(SkipLink);

  it('should have correct href', () => {
    render(<SkipLink href="#test" />);

    expect(screen.getByRole('link')).toHaveAttribute('href', '#test');
  });

  it('should render children', () => {
    render(<SkipLink href="#test">Test</SkipLink>);

    expect(screen.getByRole('link')).toHaveTextContent('Test');
  });
});
