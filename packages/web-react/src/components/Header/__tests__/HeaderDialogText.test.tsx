import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import HeaderDialogText from '../HeaderDialogText';

describe('HeaderDialogText', () => {
  classNamePrefixProviderTest(HeaderDialogText, 'HeaderDialogText');

  stylePropsTest(
    (props) => <HeaderDialogText {...props} data-testid="header-dialog-text-test" />,
    'header-dialog-text-test',
  );

  restPropsTest((props) => <HeaderDialogText {...props} />, 'span');

  it('should render text children', () => {
    const dom = render(<HeaderDialogText id="test">Hello World</HeaderDialogText>);

    const element = dom.container.querySelector('span') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });
});
