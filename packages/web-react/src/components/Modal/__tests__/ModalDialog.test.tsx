import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import ModalDialog from '../ModalDialog';

describe('ModalDialog', () => {
  classNamePrefixProviderTest(ModalDialog, 'ModalDialog');

  stylePropsTest(ModalDialog);

  restPropsTest(ModalDialog, 'article');

  it('should render children', () => {
    render(
      <ModalDialog>
        <div>Test</div>
      </ModalDialog>,
    );

    expect(screen.getByRole('article')).toHaveTextContent('Test');
  });

  it('should render with custom element type', () => {
    render(
      <ModalDialog elementType="main">
        <div>Test</div>
      </ModalDialog>,
    );

    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('should render docked on mobile', () => {
    render(
      <ModalDialog isDockedOnMobile>
        <div>Test</div>
      </ModalDialog>,
    );

    expect(screen.getByRole('article')).toHaveClass('ModalDialog--dockOnMobile');
  });

  it('should render expanded on mobile', () => {
    render(
      <ModalDialog isExpandedOnMobile>
        <div>Test</div>
      </ModalDialog>,
    );

    expect(screen.getByRole('article')).toHaveClass('ModalDialog--expandOnMobile');
  });

  it('should render scrollable', () => {
    render(
      <ModalDialog isScrollable>
        <div>Test</div>
      </ModalDialog>,
    );

    expect(screen.getByRole('article')).toHaveClass('ModalDialog--scrollable');
  });
});
