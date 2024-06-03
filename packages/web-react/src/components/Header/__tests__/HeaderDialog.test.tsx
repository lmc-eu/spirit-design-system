import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import HeaderDialog from '../HeaderDialog';

describe('HeaderDialog', () => {
  classNamePrefixProviderTest(HeaderDialog, 'HeaderDialog');

  stylePropsTest((props) => <HeaderDialog {...props} data-testid="header-dialog-test" />, 'header-dialog-test');

  restPropsTest((props) => <HeaderDialog {...props} />, 'dialog');

  it('should render text children', () => {
    const dom = render(
      <HeaderDialog id="test" isOpen={false} onClose={() => null}>
        Hello World
      </HeaderDialog>,
    );

    const element = dom.container.querySelector('dialog') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });
});
