import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Link from '../Link';
import { ClassNamePrefixProvider } from '../../../context/ClassNamePrefixContext';
import linkPropsDataProvider from './linkPropsDataProvider';
import { LinkColor } from '../../../types';

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

  it('should have classname with lmc prefix', () => {
    const dom = render(
      <ClassNamePrefixProvider value="lmc">
        <Link href="/" color="primary" />
      </ClassNamePrefixProvider>,
    );

    expect(dom.container.querySelector('a')).toHaveClass('lmc-link-primary');
  });
});
