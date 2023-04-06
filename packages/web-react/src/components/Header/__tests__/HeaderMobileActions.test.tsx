import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import HeaderMobileActions from '../HeaderMobileActions';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { HEADER_MENU_TOGGLE_LABEL_DEFAULT } from '../constants';

describe('HeaderMobileActions', () => {
  classNamePrefixProviderTest(HeaderMobileActions, 'HeaderMobileActions');

  stylePropsTest(
    (props) => <HeaderMobileActions {...props} data-testid="header-mobile-actions-test" />,
    'header-mobile-actions-test',
  );

  restPropsTest((props) => <HeaderMobileActions {...props} />, 'div');

  it('should render text children', () => {
    const dom = render(
      <HeaderMobileActions id="test" dialogId="dialog-id" isOpen={false} onOpen={() => null}>
        Hello World
      </HeaderMobileActions>,
    );

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element.textContent).toBe(`Hello World${HEADER_MENU_TOGGLE_LABEL_DEFAULT}`);
  });
});
