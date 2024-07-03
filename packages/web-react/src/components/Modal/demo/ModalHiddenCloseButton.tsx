import React from 'react';
import { useToggle } from '../../../hooks';
import { Button } from '../../Button';
import Modal from '../Modal';
import ModalBody from '../ModalBody';
import ModalDialog from '../ModalDialog';
import ModalFooter from '../ModalFooter';
import ModalHeader from '../ModalHeader';

const ModalHiddenCloseButton = () => {
  const [isOpen, isOpenToggle] = useToggle(false);
  const handleClose = () => isOpenToggle();

  return (
    <>
      <Button onClick={isOpenToggle}>Open Modal</Button>

      <Modal
        id="example-hidden-close-button"
        isOpen={isOpen}
        onClose={handleClose}
        closeOnBackdropClick={false}
        closeOnEscapeKeyDown={false}
      >
        <ModalDialog>
          <ModalHeader hasCloseButton={false}>Modal Title</ModalHeader>
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

export default ModalHiddenCloseButton;
