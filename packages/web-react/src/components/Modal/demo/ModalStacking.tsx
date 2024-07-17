import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader } from '../..';

const ModalStacking = () => {
  const [isFirstOpen, setFirstOpen] = useState(false);
  const [isSecondOpen, setSecondOpen] = useState(false);

  const toggleFirstModal = () => setFirstOpen(!isFirstOpen);
  const toggleSecondModal = () => setSecondOpen(!isSecondOpen);

  const handleFirstClose = () => setFirstOpen(false);
  const handleSecondClose = () => setSecondOpen(false);

  return (
    <>
      <Button onClick={toggleFirstModal} data-test-id="modal-stacking">
        Open Modal
      </Button>

      <Modal id="example-stacking-parent" isOpen={isFirstOpen} onClose={handleFirstClose}>
        <ModalDialog>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam mollitia
              perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus perferendis
              provident unde. Eveniet, iste, molestiae?
            </p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={toggleSecondModal}>Open stacked dialog</Button>
          </ModalFooter>
        </ModalDialog>
      </Modal>

      <Modal id="example-stacking-nested" isOpen={isSecondOpen} onClose={handleSecondClose}>
        <ModalDialog>
          <ModalHeader>Stacked Modal Title</ModalHeader>
          <ModalBody>
            <p>
              Dolor quis metus a lorem, et elit pulvinar ligula condimentum non congue rhoncus molestie, at sem viverra
              maximus nunc. Posuere pretium accumsan, pharetra vel integer sit amet volutpat neque fringilla, non mauris
              erat id augue libero. Porta non congue, et iaculis et vehicula convallis non purus placerat cursus,
              rhoncus laoreet nec et elit. Proin luctus, bibendum adipiscing ut ollicitudin vehicula nisi nunc et,
              sollicitudin eget tristique nec commodo. Porttitor ligula, tellus vehicula arcu vestibulum sed rutrum
              placerat, dui quis facilisis eget. Suscipit molestie, nibh maximus enim vestibulum aenean ut libero sed
              imperdiet, curabitur et elit venenatis posuere.
              <br />
              Sapien vitae, dui sollicitudin nullam dolor quis nec nulla sapien, diam a ollicitudin non nulla nisl. Quis
              orci porta, ac nec sapien ornare imperdiet a vel convallis, adipiscing ullamcorper lectus quis pharetra.
              At nullam rutrum, nisl eget sit amet pulvinar ultricies nec porta, diam a sem odio a mauris eu. Suscipit
              sodales, fusce ante cursus convallis dui vel dolor potenti nulla fusce gravida.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" onClick={handleSecondClose}>
              Primary action
            </Button>
            <Button color="secondary" onClick={handleSecondClose}>
              Secondary action
            </Button>
          </ModalFooter>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default ModalStacking;
