import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import HeaderLink from '../HeaderLink';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';

describe('HeaderLink', () => {
  classNamePrefixProviderTest(HeaderLink, 'HeaderLink');

  stylePropsTest((props) => <HeaderLink {...props} data-testid="header-link-test" />, 'header-link-test');

  restPropsTest((props) => <HeaderLink {...props} />, 'a');

  it('should render text children', () => {
    const dom = render(<HeaderLink id="test">Hello World</HeaderLink>);

    const element = dom.container.querySelector('a') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });

  it('should render button element', () => {
    const dom = render(
      <HeaderLink id="test" elementType="button">
        Hello World
      </HeaderLink>,
    );

    const element = dom.container.querySelector('button') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });
});
