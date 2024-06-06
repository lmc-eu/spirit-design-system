import React, { useState } from 'react';
import { Button, Modal, ModalDialog, ModalHeader, ModalBody, UncontrolledCollapse } from '../../../src/components';
import { content } from '../../../src/components/Accordion/demo/Accordion';
import { CollapseTrigger } from '../../../src/components/Collapse/demo/Collapse';

export default {
  title: 'Examples/Compositions/Modals',
};

export const ModalWithCollapse = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleModal = () => setOpen(!isOpen);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={toggleModal} aria-expanded={isOpen} aria-controls="ModalExample">
        {isOpen ? 'Close' : 'Open'} Modal
      </Button>
      <Modal id="modal-example" isOpen={isOpen} onClose={handleClose}>
        <ModalDialog>
          <ModalHeader />
          <ModalBody>
            <UncontrolledCollapse id="uncontrolled-collapse" renderTrigger={CollapseTrigger}>
              {content}
            </UncontrolledCollapse>
          </ModalBody>
        </ModalDialog>
      </Modal>
    </>
  );
};
