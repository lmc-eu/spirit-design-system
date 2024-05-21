import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { SpiritModalProps } from '../../../types';
import Modal from '../Modal';

describe('Modal', () => {
  const ModalTest = (props: SpiritModalProps) => (
    <Modal {...props} id="ModalExample" isOpen={false} onClose={() => null}>
      <div>Test</div>
    </Modal>
  );

  classNamePrefixProviderTest(ModalTest, 'Modal');

  stylePropsTest(ModalTest);

  restPropsTest(ModalTest, 'dialog');

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
