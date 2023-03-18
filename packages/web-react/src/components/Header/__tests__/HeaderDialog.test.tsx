import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import HeaderDialog from '../HeaderDialog';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';

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
