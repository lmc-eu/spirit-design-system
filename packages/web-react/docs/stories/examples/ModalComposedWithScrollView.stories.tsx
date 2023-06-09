import React, { useState } from 'react';
import {
  Button,
  ModalComposed,
  ModalComposedDialog,
  ModalComposedHeader,
  ModalComposedBody,
  ModalComposedFooter,
  ScrollView,
} from '../../../src/components';

export default {
  title: 'Examples/Compositions',
};

export const ModalComposedWithScrollView = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleModalComposed = () => setOpen(!isOpen);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={toggleModalComposed} aria-expanded={isOpen} aria-controls="#ModalComposedExample">
        {isOpen ? 'Close' : 'Open'} ModalComposed
      </Button>
      <ModalComposed id="ModalExample" isOpen={isOpen} onClose={handleClose}>
        <ModalComposedDialog>
          <ModalComposedHeader>Modal with ScrollView </ModalComposedHeader>
          <ScrollView overflowDecorators="borders">
            <ModalComposedBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam
                mollitia mollitia perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi
                natus provident unde. Eveniet, iste, molestiae?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam
                mollitia perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus
                perferendis provident unde. Eveniet, iste, molestiae?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam
                mollitia perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus
                perferendis provident unde. Eveniet, iste, molestiae?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam
                mollitia perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus
                perferendis provident unde. Eveniet, iste, molestiae?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam
                mollitia perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus
                perferendis provident unde. Eveniet, iste, molestiae?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam
                mollitia perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus
                perferendis provident unde. Eveniet, iste, molestiae?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam
                mollitia perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus
                perferendis provident unde. Eveniet, iste, molestiae?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam
                mollitia perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus
                perferendis provident unde. Eveniet, iste, molestiae?
              </p>
            </ModalComposedBody>
          </ScrollView>
          <ModalComposedFooter>
            <Button color="primary" onClick={handleClose}>
              Confirm
            </Button>
            <Button color="tertiary" onClick={handleClose}>
              Cancel
            </Button>
          </ModalComposedFooter>
        </ModalComposedDialog>
      </ModalComposed>
    </>
  );
};
