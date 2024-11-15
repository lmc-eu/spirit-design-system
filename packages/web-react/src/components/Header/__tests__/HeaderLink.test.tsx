import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import HeaderLink from '../HeaderLink';

describe('HeaderLink', () => {
  classNamePrefixProviderTest(HeaderLink, 'HeaderLink');

  stylePropsTest((props) => <HeaderLink {...props} data-testid="header-link-test" />, 'header-link-test');

  restPropsTest((props) => <HeaderLink {...props} />, 'a');

  it('should render text children', () => {
    const dom = render(
      <HeaderLink href="#" id="test">
        Hello World
      </HeaderLink>,
    );

    const element = dom.container.querySelector('a') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });

  it('should render button element', () => {
    const dom = render(
      <HeaderLink href="#" id="test" elementType="button">
        Hello World
      </HeaderLink>,
    );

    const element = dom.container.querySelector('button') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });
});
