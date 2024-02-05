import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import ModalDialog from '../ModalDialog';

describe('ModalDialog', () => {
  classNamePrefixProviderTest(ModalDialog, 'ModalDialog');

  stylePropsTest(ModalDialog);

  restPropsTest(ModalDialog, 'article');

  it('should render children', () => {
    const dom = render(
      <ModalDialog>
        <div>Test</div>
      </ModalDialog>,
    );

    expect(dom.container).toHaveTextContent('Test');
  });

  it('should render with custom element type', () => {
    const dom = render(
      <ModalDialog elementType="section">
        <div>Test</div>
      </ModalDialog>,
    );

    expect(dom.container.querySelector('section')).toBeInTheDocument();
  });

  it('should render docked on mobile', () => {
    const dom = render(
      <ModalDialog isDockedOnMobile>
        <div>Test</div>
      </ModalDialog>,
    );

    expect(dom.container.querySelector('.ModalDialog')).toHaveClass('ModalDialog--dockOnMobile');
  });

  it('should render expanded on mobile', () => {
    const dom = render(
      <ModalDialog isExpandedOnMobile>
        <div>Test</div>
      </ModalDialog>,
    );

    expect(dom.container.querySelector('.ModalDialog')).toHaveClass('ModalDialog--expandOnMobile');
  });

  it('should render non scrollable', () => {
    const dom = render(
      <ModalDialog isScrollable={false}>
        <div>Test</div>
      </ModalDialog>,
    );

    expect(dom.container.querySelector('.ModalDialog')).toHaveClass('ModalDialog--nonScrollable');
  });
});
