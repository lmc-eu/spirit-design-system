// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React, { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file -- @see https://jira.almacareer.tech/browse/DS-561
import icons from '@lmc-eu/spirit-icons/icons';
import { IconsProvider } from '../../../context';
import { Button } from '../../Button';
import Modal from '../Modal';
import ModalBody from '../ModalBody';
import ModalDialog from '../ModalDialog';
import ModalFooter from '../ModalFooter';
import ModalHeader from '../ModalHeader';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => {
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
        <ModalDialog maxHeightFromTabletUp="700px" preferredHeightOnMobile="400px" preferredHeightFromTabletUp="500px">
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
            <p className="d-tablet-none">
              This modal has a custom height of <code>400px</code>.
              <br />
              <br />
              The max height cannot be customized on mobile though.
            </p>
            <p className="d-none d-tablet-block">
              This modal has a custom height of <code>500px</code>.
              <br />
              <br />
              The max height of this modal is <code>700px</code>.
            </p>
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
    </IconsProvider>
  );
};

export default Story;
