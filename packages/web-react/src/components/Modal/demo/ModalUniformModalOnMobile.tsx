import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader } from '../..';

const ModalDefault = () => {
  const [isFirstOpen, setFirstOpen] = useState(false);
  const [isSecondOpen, setSecondOpen] = useState(false);

  const toggleFirstModal = () => setFirstOpen(!isFirstOpen);
  const toggleSecondModal = () => setSecondOpen(!isSecondOpen);

  const handleFirstClose = () => setFirstOpen(false);
  const handleSecondClose = () => setSecondOpen(false);

  return (
    <>
      {/* Set `display: contents` to enable parent stack layout. */}
      <div className="spirit-feature-modal-enable-uniform-dialog" style={{ display: 'contents' }}>
        <Button onClick={toggleFirstModal}>Open Modal</Button>

        <Modal id="example-uniform" isOpen={isFirstOpen} onClose={handleFirstClose}>
          <ModalDialog>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam
                mollitia mollitia perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi
                natus provident unde. Eveniet, iste, molestiae?
              </p>
            </ModalBody>
            <ModalFooter description="Optional description">
              <Button onClick={handleFirstClose}>Primary action</Button>
              <Button color="secondary" onClick={handleFirstClose}>
                Secondary action
              </Button>
            </ModalFooter>
          </ModalDialog>
        </Modal>

        <Button onClick={toggleSecondModal}>Open Docked Modal (mobile only)</Button>

        <Modal id="example-docked" isOpen={isSecondOpen} onClose={handleSecondClose}>
          <ModalDialog isDockedOnMobile isExpandedOnMobile>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam
                mollitia perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus
                perferendis provident unde. Eveniet, iste, molestiae?
              </p>
            </ModalBody>
            <ModalFooter description="Optional description">
              <Button onClick={handleSecondClose}>Primary action</Button>
              <Button color="secondary" onClick={handleSecondClose}>
                Secondary action
              </Button>
            </ModalFooter>
          </ModalDialog>
        </Modal>
      </div>
    </>
  );
};

export default ModalDefault;
