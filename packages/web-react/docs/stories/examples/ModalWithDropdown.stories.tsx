import React from 'react';
import {
  Button,
  Dropdown,
  DropdownPopover,
  DropdownTrigger,
  Modal,
  ModalBody,
  ModalDialog,
  ModalHeader,
  Text,
} from '../../../src/components';
import { useToggle } from '../../../src/hooks';

export default {
  title: 'Examples/Compositions/Modals',
};

export const ModalWithDropdown = () => {
  const [isModalOpen, toggleModal] = useToggle(false);
  const [isDropdownOpen, toggleDropdown] = useToggle(false);

  const handleClose = () => {
    toggleModal();
  };

  return (
    <>
      <Button onClick={toggleModal} aria-expanded={isModalOpen} aria-controls="ModalExample">
        {isModalOpen ? 'Close' : 'Open'} Modal
      </Button>
      <Modal id="ModalExample" isOpen={isModalOpen} onClose={handleClose}>
        <ModalDialog>
          <ModalHeader />
          <ModalBody>
            <Dropdown id="modal-with-dropdown" isOpen={isDropdownOpen} onToggle={toggleDropdown}>
              <DropdownTrigger elementType="button">Dropdown is {isDropdownOpen ? 'open' : 'closed'}</DropdownTrigger>
              <DropdownPopover>
                <a href="#info" className="d-flex mb-400">
                  <Text UNSAFE_className="ml-300">Information</Text>
                </a>
                <a href="#link" className="d-flex mb-400">
                  <Text UNSAFE_className="ml-300">More links</Text>
                </a>
                <a href="#profile" className="d-flex mb-400">
                  <Text UNSAFE_className="ml-300">Profile</Text>
                </a>
                <a href="#help" className="d-flex">
                  <Text UNSAFE_className="ml-300">Help</Text>
                </a>
              </DropdownPopover>
            </Dropdown>
          </ModalBody>
        </ModalDialog>
      </Modal>
    </>
  );
};
