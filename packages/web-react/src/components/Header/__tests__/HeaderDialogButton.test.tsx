import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import HeaderDialogButton from '../HeaderDialogButton';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';

describe('HeaderDialogButton', () => {
  classNamePrefixProviderTest(HeaderDialogButton, 'HeaderDialogLink');

  stylePropsTest(
    (props) => <HeaderDialogButton {...props} data-testid="header-dialog-button-test" />,
    'header-dialog-button-test',
  );

  restPropsTest((props) => <HeaderDialogButton {...props} />, 'button');

  it('should render text children', () => {
    const dom = render(<HeaderDialogButton id="test">Hello World</HeaderDialogButton>);

    const element = dom.container.querySelector('button') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });
});
