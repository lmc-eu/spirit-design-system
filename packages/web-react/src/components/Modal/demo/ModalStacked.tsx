// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React, { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file -- @see https://jira.almacareer.tech/browse/DS-561
import icons from '@lmc-eu/spirit-icons/icons';
import { Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader } from '..';
import { IconsProvider } from '../../../context';
import { Button } from '../../Button';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => {
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
    <IconsProvider value={icons}>
      <Button onClick={toggleFirstModal} aria-expanded={isFirstOpen} aria-controls="NestedModal">
        {isFirstOpen ? 'Close' : 'Open'} Modal
      </Button>
      <Modal id="ChildModal" isOpen={isSecondOpen} onClose={handleSecondClose}>
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
      <Modal id="NestedModal" isOpen={isFirstOpen} onClose={handleFirstClose}>
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
            <Button onClick={toggleSecondModal}>Open stacked</Button>
            <Button color="tertiary" onClick={handleFirstClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalDialog>
      </Modal>
    </IconsProvider>
  );
};

export default Story;
