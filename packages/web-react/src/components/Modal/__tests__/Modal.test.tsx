import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { ClassNamePrefixProvider } from '../../../context';
import Modal from '../Modal';
import ModalBody from '../ModalBody';
import ModalHeader from '../ModalHeader';
import ModalFooter from '../ModalFooter';

describe('Modal', () => {
  it('renders class with UNSAFE_className', async () => {
    const testClassName = 'test-class';
    const dom = render(<Modal id="TestDemoModal" data-testid="modal-test" UNSAFE_className={testClassName} />);

    await waitFor(() => {
      const element = dom.baseElement.querySelector('[data-testid="modal-test"]');
      expect(element).toHaveClass(testClassName);
    });
  });

  it('renders style with UNSAFE_style', async () => {
    const testStyle = { color: 'red' };
    const dom = render(<Modal id="TestDemoModal" data-testid="modal-test" UNSAFE_style={testStyle} />);

    await waitFor(() => {
      const element = dom.baseElement.querySelector('[data-testid="modal-test"]');
      expect(element).toHaveStyle(testStyle);
    });
  });

  it('should pass rest props to main element', async () => {
    const testId = 'modal-test';
    const { baseElement } = render(<Modal id="TestDemoModal" data-testid={testId} />);

    await waitFor(() => {
      const element = baseElement.querySelector('dialog') as HTMLElement;
      expect(element).toHaveAttribute('data-testid', testId);
    });
  });

  it('renders with class name prefix', async () => {
    const prefix = 'lmc';
    const { baseElement } = render(
      <ClassNamePrefixProvider value={prefix}>
        <Modal id="TestDemoModal" data-testid="modal-test" />
      </ClassNamePrefixProvider>,
    );

    await waitFor(() => {
      const element = baseElement.querySelector('[data-testid="modal-test"]');

      expect(element).toHaveClass(`${prefix}-Modal`);
    });
  });

  it('should have text classname', () => {
    const { baseElement } = render(<Modal id="TestDemoModal" />);
    const element = baseElement.querySelector('dialog') as HTMLElement;

    expect(element).toHaveClass('Modal');
  });

  it('should have children', () => {
    const { getByText } = render(<Modal id="TestDemoModal">test</Modal>);

    expect(getByText('test')).toBeTruthy();
  });

  it('should have children nodes', () => {
    const { getByText } = render(
      <Modal id="TestDemoModal">
        <ModalHeader>header content</ModalHeader>
        <ModalBody>body content</ModalBody>
        <ModalFooter>footer content</ModalFooter>
      </Modal>,
    );

    expect(getByText('header content')).toBeTruthy();
    expect(getByText('body content')).toBeTruthy();
    expect(getByText('footer content')).toBeTruthy();
  });

  it('should close on click', () => {
    const handleClose = jest.fn();
    const { getByText } = render(<Modal id="TestDemoModal" onClose={handleClose} />);

    fireEvent.click(getByText(/close/i));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
