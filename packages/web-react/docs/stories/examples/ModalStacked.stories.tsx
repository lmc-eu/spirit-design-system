import React, { useState } from 'react';
import { Button, Modal, ModalDialog, ModalHeader, ModalBody, ModalFooter } from '../../../src/components';

export default {
  title: 'Examples/Compositions/Modals',
};

export const ModalStacked = () => {
  const [isFirstOpen, setFirstOpen] = useState(false);
  const [isSecondOpen, setSecondOpen] = useState(false);

  const toggleFirstModal = () => setFirstOpen(!isFirstOpen);
  const toggleSecondModal = () => setSecondOpen(!isSecondOpen);

  const handleFirstClose = () => {
    setFirstOpen(false);
  };
  const handleSecondClose = () => {
    setSecondOpen(false);
  };

  return (
    <>
      <Button onClick={toggleFirstModal} aria-expanded={isFirstOpen} aria-controls="#ModalExample">
        {isFirstOpen ? 'Close' : 'Open'} Modal
      </Button>
      <Modal id="ModalExampleStacked" isOpen={isSecondOpen} onClose={handleSecondClose}>
        <ModalDialog>
          <ModalHeader>Modal stacked</ModalHeader>
          <ModalBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam mollitia
              mollitia perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus
              provident unde. Eveniet, iste, molestiae?
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleSecondClose}>
              Confirm
            </Button>
            <Button color="tertiary" onClick={handleSecondClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalDialog>
      </Modal>
      <Modal id="ModalExample" isOpen={isFirstOpen} onClose={handleFirstClose}>
        <ModalDialog>
          <ModalHeader>Modal </ModalHeader>
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
            <Button color="primary" onClick={toggleSecondModal}>
              Open stacked
            </Button>
            <Button color="tertiary" onClick={handleFirstClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalDialog>
      </Modal>
    </>
  );
};
