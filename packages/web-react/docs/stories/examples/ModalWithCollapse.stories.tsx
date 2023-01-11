import React, { useState } from 'react';
import { Button, Icon, Modal, ModalHeader, ModalBody, UncontrolledCollapse } from '../../../src/components';
import { content } from '../../../src/components/Accordion/stories/Accordion';
import { CollapseTrigger } from '../../../src/components/Collapse/stories/Collapse';

export default {
  title: 'Examples/Compositions',
};

export const ModalWithCollapse = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleModal = () => setOpen(!isOpen);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={toggleModal} aria-expanded={isOpen} aria-controls="#ModalExample">
        {isOpen ? 'Close' : 'Open'} Modal
      </Button>
      <Modal id="ModalExample" isOpen={isOpen} onClose={handleClose}>
        <ModalHeader>
          <Button isSquare color="tertiary" onClick={toggleModal} aria-expanded={isOpen} aria-controls="#ModalExample">
            <Icon name="close" />
          </Button>
        </ModalHeader>
        <ModalBody>
          <UncontrolledCollapse renderTrigger={CollapseTrigger}>{content}</UncontrolledCollapse>
        </ModalBody>
      </Modal>
    </>
  );
};
