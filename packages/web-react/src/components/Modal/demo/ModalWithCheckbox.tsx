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
import { Checkbox } from '../../Checkbox';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => {
  const [isOpen, setOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const toggleModal = () => setOpen(!isOpen);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <IconsProvider value={icons}>
      <Button onClick={toggleModal} aria-expanded={isOpen} aria-controls="#ModalExample">
        {isOpen ? 'Close' : 'Open'} Modal
      </Button>
      <Modal id="ModalExample" isOpen={isOpen} onClose={handleClose}>
        <ModalDialog>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>
            <Checkbox
              key={`checkbox-test-${Number(isChecked)}`}
              id="checkbox-1"
              label="element 1"
              isChecked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
            />
            <Checkbox label="element-2" id="checkbox-2" />
          </ModalBody>
          <ModalFooter>
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
