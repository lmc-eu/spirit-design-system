// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import { ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import Modal from '../Modal';
import ModalDialog from '../ModalDialog';
import ModalBody from '../ModalBody';
import ModalHeader from '../ModalHeader';
import ModalFooter from '../ModalFooter';
import { Button } from '../../Button';

const Story: ComponentStory<typeof Modal> = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleModal = () => setOpen(!isOpen);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <Button onClick={toggleModal} aria-expanded={isOpen}>
          {isOpen ? 'Close' : 'Open'} Modal
        </Button>
      </div>
      <Modal id="ModalExample" isOpen={isOpen} onClose={handleClose}>
        <ModalDialog>
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>Body</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleClose}>
              Confirm
            </Button>
            <Button color="tertiary" onClick={handleClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default Story;
