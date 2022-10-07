import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import Modal from '../Modal';

describe('Modal', () => {
  classNamePrefixProviderTest(Modal, 'Modal');

  stylePropsTest(Modal);

  restPropsTest(Modal, 'dialog');

  it('should render inner element', () => {
    const dom = render(<Modal id="ModalTestExample">Hello World</Modal>);

    const element = dom.container.querySelector('dialog') as HTMLElement;
    expect(element).toContainElement(dom.container.querySelector('.Modal__dialog'));
  });
});
