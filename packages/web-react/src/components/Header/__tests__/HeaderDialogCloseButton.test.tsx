import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import HeaderDialogCloseButton from '../HeaderDialogCloseButton';

describe('HeaderDialogCloseButton', () => {
  classNamePrefixProviderTest(HeaderDialogCloseButton, 'HeaderDialogCloseButton');

  stylePropsTest(
    (props) => <HeaderDialogCloseButton {...props} data-testid="header-desktop-close-button-test" />,
    'header-desktop-close-button-test',
  );

  restPropsTest((props) => <HeaderDialogCloseButton {...props} />, 'button');

  it('should render text label', () => {
    const dom = render(<HeaderDialogCloseButton id="test" label="Hello World" />);

    const element = dom.container.querySelector('button') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });
});
