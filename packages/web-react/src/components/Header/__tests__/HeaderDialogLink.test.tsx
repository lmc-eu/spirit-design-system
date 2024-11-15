import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import HeaderDialogLink from '../HeaderDialogLink';

describe('HeaderDialogLink', () => {
  classNamePrefixProviderTest(HeaderDialogLink, 'HeaderDialogLink');

  stylePropsTest(
    (props) => <HeaderDialogLink {...props} data-testid="header-dialog-link-test" />,
    'header-dialog-link-test',
  );

  restPropsTest((props) => <HeaderDialogLink {...props} />, 'a');

  it('should render text children', () => {
    const dom = render(
      <HeaderDialogLink href="#" id="test">
        Hello World
      </HeaderDialogLink>,
    );

    const element = dom.container.querySelector('a') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });

  it('should render button element', () => {
    const dom = render(
      <HeaderDialogLink href="#" id="test" elementType="button">
        Hello World
      </HeaderDialogLink>,
    );

    const element = dom.container.querySelector('button') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });
});
