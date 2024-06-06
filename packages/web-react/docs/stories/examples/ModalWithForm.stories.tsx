import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  FieldGroup,
  Modal,
  ModalBody,
  ModalDialog,
  ModalFooter,
  ModalHeader,
  Radio,
  Select,
  Stack,
  TextArea,
  TextField,
} from '../../../src/components';

export default {
  title: 'Examples/Compositions/Modals',
};

export const ModalWithForm = () => {
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
          <ModalHeader>Modal with Form </ModalHeader>
          <ModalBody>
            <form method="get" action="#">
              <Stack hasSpacing>
                <TextField id="name" label="Name" />
                <Select id="allegiance" label="Choose your allegiance">
                  <option value="" selected disabled>
                    Order
                  </option>
                  <option value="1">Jedi</option>
                  <option value="2">Sith</option>
                </Select>
                <Checkbox id="inform-user" label="Inform the User?" />
                <FieldGroup id="now-or-never" label="Do it?">
                  <Radio label="Now" id="now" name="do-it" />
                  <Radio label="Never" id="never" name="do-it" />
                </FieldGroup>
                <TextArea id="textarea" />
                <Button type="submit">Send</Button>
              </Stack>
            </form>
          </ModalBody>
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
