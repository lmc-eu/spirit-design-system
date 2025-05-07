import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  ariaAttributesTest,
  classNamePrefixProviderTest,
  actionLinkColorPropsTest,
  restPropsTest,
  stylePropsTest,
  validHtmlAttributesTest,
  elementTypePropsTest,
} from '@local/tests';
import { LinkColorsDictionaryType } from '../../../types';
import Link from '../Link';
import linkPropsDataProvider from './linkPropsDataProvider';

describe('Link', () => {
  classNamePrefixProviderTest(Link, 'link-primary');

  stylePropsTest(Link);

  actionLinkColorPropsTest(Link, 'link-');

  restPropsTest(Link, 'a');

  validHtmlAttributesTest(Link);

  ariaAttributesTest(Link);

  elementTypePropsTest(Link);

  it.each(linkPropsDataProvider)('should have class', (color, underlined, isDisabled, expectedClassName) => {
    render(
      <Link
        href="/"
        color={color as LinkColorsDictionaryType<string>}
        underlined={underlined}
        isDisabled={isDisabled}
      />,
    );

    expect(screen.getByRole('link')).toHaveClass(expectedClassName as string);
  });

  it('should have correct href', () => {
    render(<Link href="/test" />);

    expect(screen.getByRole('link')).toHaveAttribute('href', '/test');
  });

  it('should render children', () => {
    render(<Link href="/">Test</Link>);

    expect(screen.getByRole('link')).toHaveTextContent('Test');
  });
});
