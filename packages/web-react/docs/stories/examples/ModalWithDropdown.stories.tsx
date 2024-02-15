import React, { useState, Ref } from 'react';
import { Button, Modal, ModalDialog, ModalHeader, ModalBody, Text, Dropdown } from '../../../src/components';
import { DropdownRenderProps } from '../../../src/types';

export default {
  title: 'Examples/Compositions/Modals',
};

const dropdownTrigger = ({ isOpen, trigger: { className, ref, ...restOf } }: DropdownRenderProps) => (
  <Button UNSAFE_className={className} ref={ref as Ref<HTMLButtonElement>} {...restOf}>
    Dropdown is {isOpen ? 'open' : 'closed'}
  </Button>
);

export const ModalWithDropdown = () => {
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
      <Modal id="ModalExample" isOpen={isOpen} onClose={handleClose}>
        <ModalDialog>
          <ModalHeader />
          <ModalBody>
            <Dropdown renderTrigger={dropdownTrigger}>
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
            </Dropdown>
          </ModalBody>
        </ModalDialog>
      </Modal>
    </>
  );
};
