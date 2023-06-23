// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React, { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import { IconsProvider } from '../../../context';
import Modal from '../Modal';
import ModalDialog from '../ModalDialog';
import ModalBody from '../ModalBody';
import ModalHeader from '../ModalHeader';
import ModalFooter from '../ModalFooter';
import { Button } from '../../Button';

const Story = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleModal = () => setOpen(!isOpen);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <IconsProvider value={icons}>
      <div>
        <Button onClick={toggleModal} aria-expanded={isOpen}>
          Open Modal
        </Button>
      </div>
      <Modal id="ModalExample" isOpen={isOpen} onClose={handleClose}>
        <ModalDialog preferredHeightOnMobile="500px">
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
    </IconsProvider>
  );
};

export default Story;
