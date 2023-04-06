import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import HeaderDialogLink from '../HeaderDialogLink';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';

describe('HeaderDialogLink', () => {
  classNamePrefixProviderTest(HeaderDialogLink, 'HeaderDialogLink');

  stylePropsTest(
    (props) => <HeaderDialogLink {...props} data-testid="header-dialog-link-test" />,
    'header-dialog-link-test',
  );

  restPropsTest((props) => <HeaderDialogLink {...props} />, 'a');

  it('should render text children', () => {
    const dom = render(<HeaderDialogLink id="test">Hello World</HeaderDialogLink>);

    const element = dom.container.querySelector('a') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });
});
