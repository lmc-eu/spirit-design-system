import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import UncontrolledToast from '../UncontrolledToast';
import { ToastContext } from '../ToastContext';

const defaultContextValue = {
  id: 'test-id',
  message: 'Toast message',
  isOpen: false,
  iconName: undefined,
  color: undefined,
  hide: jest.fn(),
  show: jest.fn(),
};

describe('UncontrolledToast', () => {
  it('should not render', () => {
    const dom = render(
      <ToastContext.Provider value={defaultContextValue}>
        <UncontrolledToast />
      </ToastContext.Provider>,
    );

    const element = dom.container.querySelector('.ToastBar') as HTMLElement;

    expect(element).not.toBeInTheDocument();
  });

  it('should render opened toast', () => {
    const contextValue = {
      ...defaultContextValue,
      isOpen: true,
    };

    const dom = render(
      <ToastContext.Provider value={contextValue}>
        <UncontrolledToast />
      </ToastContext.Provider>,
    );

    const elementToast = dom.container.querySelector('.Toast') as HTMLElement;
    const elementToastBar = dom.container.querySelector('.ToastBar') as HTMLElement;

    expect(elementToast).toBeInTheDocument();
    expect(elementToastBar).toBeInTheDocument();
    expect(elementToastBar).toHaveClass('is-open ToastBar--inverted');
    expect(elementToastBar.querySelector('.ToastBar .ToastBar__content svg')).not.toBeInTheDocument();
  });

  it('should render opened toast with params', () => {
    const contextValue = {
      ...defaultContextValue,
      isOpen: true,
    };

    const dom = render(
      <ToastContext.Provider value={contextValue}>
        <UncontrolledToast alignmentX="right" alignmentY="top" isDismissible hasIcon closeLabel="Close test" />
      </ToastContext.Provider>,
    );

    const elementToast = dom.container.querySelector('.Toast') as HTMLElement;
    const elementToastBar = dom.container.querySelector('.ToastBar') as HTMLElement;

    expect(elementToast).toBeInTheDocument();
    expect(elementToastBar).toBeInTheDocument();
    expect(elementToast).toHaveClass('Toast--right Toast--top');
    expect(elementToastBar).toHaveClass('ToastBar ToastBar--inverted ToastBar--dismissible is-open');
    expect(elementToastBar.querySelector('.ToastBar__content svg')).toBeInTheDocument();
    expect(elementToastBar.querySelector('button')).toHaveTextContent('Close test');
  });

  it('should close toast when close button is clicked', () => {
    const contextValue = {
      ...defaultContextValue,
      isOpen: true,
    };

    const dom = render(
      <ToastContext.Provider value={contextValue}>
        <UncontrolledToast isDismissible />
      </ToastContext.Provider>,
    );

    const elementToastBar = dom.container.querySelector('.ToastBar') as HTMLElement;
    const elementButton = elementToastBar.querySelector('button') as HTMLButtonElement;

    elementButton.click();

    expect(contextValue.hide).toHaveBeenCalled();
  });
});
