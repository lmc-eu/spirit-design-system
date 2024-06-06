import React, { useState } from 'react';
import { Button, Modal, ModalDialog, ModalHeader, ModalBody, ModalFooter } from '../../../src/components';

export default {
  title: 'Examples/Compositions/Modals',
};

export const ModalStacked = () => {
  const [isStackedOpen, setStackedOpen] = useState(false);
  const [isChildOpen, setChildOpen] = useState(false);

  const toggleStackedModal = () => setStackedOpen(!isStackedOpen);
  const toggleChildModal = () => setChildOpen(!isChildOpen);

  const handleStackedClose = () => {
    setStackedOpen(false);
  };
  const handleChildClose = () => {
    setChildOpen(false);
  };

  return (
    <>
      <Button onClick={toggleStackedModal} aria-expanded={isStackedOpen} aria-controls="ModalStacked">
        {isStackedOpen ? 'Close' : 'Open'} Modal
      </Button>
      <Modal id="modal-child" isOpen={isChildOpen} onClose={handleChildClose}>
        <ModalDialog>
          <ModalHeader>Child Modal</ModalHeader>
          <ModalBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam mollitia
              mollitia perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus
              provident unde. Eveniet, iste, molestiae?
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleChildClose}>
              Close Child Modal
            </Button>
          </ModalFooter>
        </ModalDialog>
      </Modal>
      <Modal id="modal-stacked" isOpen={isStackedOpen} onClose={handleStackedClose}>
        <ModalDialog>
          <ModalHeader>Modal</ModalHeader>
          <ModalBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam mollitia
              mollitia perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus
              provident unde. Eveniet, iste, molestiae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam mollitia
              mollitia perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus
              provident unde. Eveniet, iste, molestiae?
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggleChildModal}>
              Open Child Modal
            </Button>
            <Button color="tertiary" onClick={handleStackedClose}>
              Close Modal
            </Button>
          </ModalFooter>
        </ModalDialog>
      </Modal>
    </>
  );
};
