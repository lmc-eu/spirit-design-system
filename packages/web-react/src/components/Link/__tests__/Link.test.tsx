import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { LinkColor } from '../../../types';
import Link from '../Link';
import linkPropsDataProvider from './linkPropsDataProvider';

describe('Link', () => {
  it.each(linkPropsDataProvider)('should have class', (color, isUnderlined, isDisabled, expectedClassName) => {
    const dom = render(
      <Link
        href="/"
        color={color as LinkColor}
        isUnderlined={isUnderlined as boolean}
        isDisabled={isDisabled as boolean}
      />,
    );

    expect(dom.container.querySelector('a')).toHaveClass(expectedClassName as string);
  });

  classNamePrefixProviderTest(Link, 'link-primary');
});
