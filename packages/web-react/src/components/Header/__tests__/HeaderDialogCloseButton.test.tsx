import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { useIconMock, classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import HeaderDialogCloseButton from '../HeaderDialogCloseButton';

jest.mock('../../../hooks', () => useIconMock);

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
