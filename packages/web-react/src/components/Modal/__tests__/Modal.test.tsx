import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import {
  ariaAttributesTest,
  classNamePrefixProviderTest,
  restPropsTest,
  stylePropsTest,
  validHtmlAttributesTest,
} from '@local/tests';
import { type SpiritModalProps } from '../../../types';
import Modal from '../Modal';
import '@local/tests/mocks/dialog';

describe('Modal', () => {
  const ModalTest = (props: SpiritModalProps) => (
    <Modal {...props} id="modal-example" isOpen={false} onClose={() => null}>
      <div>Test</div>
    </Modal>
  );

  classNamePrefixProviderTest(ModalTest, 'Modal');

  stylePropsTest(ModalTest);

  restPropsTest(ModalTest, 'dialog');

  validHtmlAttributesTest(ModalTest);

  ariaAttributesTest(ModalTest);

  it('should not close modal dialog', () => {
    const mockedOnClose = jest.fn();
    render(
      <Modal id="test" isOpen onClose={mockedOnClose} closeOnBackdropClick={false}>
        <div>Test</div>
      </Modal>,
    );

    const dialog = screen.getByRole('dialog');
    fireEvent.click(dialog);

    expect(mockedOnClose).not.toHaveBeenCalled();
  });

  it('should close modal dialog', () => {
    const mockedOnClose = jest.fn();
    render(
      <Modal id="test" isOpen onClose={mockedOnClose} closeOnBackdropClick>
        <div>Test</div>
      </Modal>,
    );

    const dialog = screen.getByRole('dialog');
    fireEvent.click(dialog);

    expect(mockedOnClose).toHaveBeenCalled();
  });
});
