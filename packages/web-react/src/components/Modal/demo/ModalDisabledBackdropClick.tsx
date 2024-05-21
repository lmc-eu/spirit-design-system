import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader } from '../..';

const ModalDisabledBackdropClick = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleModal = () => setOpen(!isOpen);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={toggleModal}>Open Modal</Button>

      <Modal id="example-disabled-backdrop-click" isOpen={isOpen} onClose={handleClose} closeOnBackdropClick={false}>
        <ModalDialog>
          <ModalHeader id="example-disabled-backdrop-click">Modal Title</ModalHeader>
          <ModalBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam mollitia
              perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus perferendis
              provident unde. Eveniet, iste, molestiae?
            </p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleClose}>Primary action</Button>
            <Button color="secondary" onClick={handleClose}>
              Secondary action
            </Button>
          </ModalFooter>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default ModalDisabledBackdropClick;
