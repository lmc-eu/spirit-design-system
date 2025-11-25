import { act, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { runAxe } from '@local/tests/testUtils/runAxe';
import Modal from '../Modal';
import ModalBody from '../ModalBody';
import ModalDialog from '../ModalDialog';
import ModalFooter from '../ModalFooter';
import ModalHeader from '../ModalHeader';

jest.mock('../../../hooks/useIcon');

describe('Modal accessibility', () => {
  it('should be accessible when open', async () => {
    await act(async () => {
      render(
        <Modal id="modal-example" isOpen onClose={() => {}}>
          <ModalDialog>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalBody>Modal content</ModalBody>
            <ModalFooter>Modal footer</ModalFooter>
          </ModalDialog>
        </Modal>,
      );
    });

    const element = await waitFor(() => screen.getByRole('dialog'));

    const results = await runAxe(element);

    expect(results).toHaveNoAxeViolations();
  });
});
