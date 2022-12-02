// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import { ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import { Button } from '../../Button';
import Modal from '../Modal';
import ModalBody from '../ModalBody';
import ModalHeader from '../ModalHeader';
import { IconsProvider } from '../../../context';
import { Icon } from '../../Icon';

const Story: ComponentStory<typeof Modal> = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleModal = () => setOpen(!isOpen);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <IconsProvider value={icons}>
      <Button onClick={toggleModal} aria-expanded={isOpen} aria-controls="#ModalExample">
        {isOpen ? 'Close' : 'Open'} Modal with long text
      </Button>
      <Modal id="ModalExample" isOpen={isOpen} onClose={handleClose}>
        <ModalHeader>
          <Button isSquare color="tertiary" onClick={toggleModal} aria-expanded={isOpen} aria-controls="#ModalExample">
            <Icon name="close" />
          </Button>
        </ModalHeader>
        <ModalBody>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam mollitia
            perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus perferendis
            provident unde. Eveniet, iste, molestiae?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam mollitia
            perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus perferendis
            provident unde. Eveniet, iste, molestiae?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam mollitia
            perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus perferendis
            provident unde. Eveniet, iste, molestiae?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam mollitia
            perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus perferendis
            provident unde. Eveniet, iste, molestiae?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam mollitia
            perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus perferendis
            provident unde. Eveniet, iste, molestiae?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam mollitia
            perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus perferendis
            provident unde. Eveniet, iste, molestiae?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam mollitia
            perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus perferendis
            provident unde. Eveniet, iste, molestiae?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam mollitia
            perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus perferendis
            provident unde. Eveniet, iste, molestiae?
          </p>
        </ModalBody>
      </Modal>
    </IconsProvider>
  );
};

export default Story;
