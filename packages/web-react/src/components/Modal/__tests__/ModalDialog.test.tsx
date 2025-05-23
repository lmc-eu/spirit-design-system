import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  ariaAttributesTest,
  classNamePrefixProviderTest,
  elementTypePropsTest,
  restPropsTest,
  stylePropsTest,
  validHtmlAttributesTest,
} from '@local/tests';
import ModalDialog from '../ModalDialog';

describe('ModalDialog', () => {
  classNamePrefixProviderTest(ModalDialog, 'ModalDialog');

  stylePropsTest(ModalDialog);

  restPropsTest(ModalDialog, 'article');

  validHtmlAttributesTest(ModalDialog);

  ariaAttributesTest(ModalDialog);

  elementTypePropsTest(ModalDialog);

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

  it('should have height CSS variable', () => {
    render(
      <ModalDialog height="400px">
        <div>Test</div>
      </ModalDialog>,
    );

    expect(screen.getByRole('article')).toHaveStyle('--modal-dialog-height: 400px');
  });

  it('should have some height CSS variables', () => {
    render(
      <ModalDialog height={{ tablet: '500px', desktop: '600px' }}>
        <div>Test</div>
      </ModalDialog>,
    );

    expect(screen.getByRole('article')).toHaveStyle('--modal-dialog-height-tablet: 500px');
    expect(screen.getByRole('article')).toHaveStyle('--modal-dialog-height-desktop: 600px');
  });

  it('should have all height CSS variables', () => {
    render(
      <ModalDialog height={{ mobile: '400px', tablet: '500px', desktop: '600px' }}>
        <div>Test</div>
      </ModalDialog>,
    );

    expect(screen.getByRole('article')).toHaveStyle('--modal-dialog-height: 400px');
    expect(screen.getByRole('article')).toHaveStyle('--modal-dialog-height-tablet: 500px');
    expect(screen.getByRole('article')).toHaveStyle('--modal-dialog-height-desktop: 600px');
  });

  it('should have all max height CSS variables', () => {
    render(
      <ModalDialog maxHeight={{ mobile: '400px', tablet: '500px', desktop: '600px' }}>
        <div>Test</div>
      </ModalDialog>,
    );

    expect(screen.getByRole('article')).toHaveStyle('--modal-dialog-max-height: 400px');
    expect(screen.getByRole('article')).toHaveStyle('--modal-dialog-max-height-tablet: 500px');
    expect(screen.getByRole('article')).toHaveStyle('--modal-dialog-max-height-desktop: 600px');
  });
});
