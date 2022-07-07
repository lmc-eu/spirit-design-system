import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { LinkColor } from '../../../types';
import Link from '../Link';
import linkPropsDataProvider from './linkPropsDataProvider';

describe('Link', () => {
  classNamePrefixProviderTest(Link, 'link-primary');

  stylePropsTest(Link);

  restPropsTest(Link, 'a');

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
});
