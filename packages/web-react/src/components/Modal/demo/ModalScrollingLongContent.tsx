import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ScrollView } from '../..';

const ModalScrollingLongContent = () => {
  const [isFirstOpen, setFirstOpen] = useState(false);
  const [isSecondOpen, setSecondOpen] = useState(false);

  const toggleFirstModal = () => setFirstOpen(!isFirstOpen);
  const toggleSecondModal = () => setSecondOpen(!isSecondOpen);

  const handleFirstClose = () => setFirstOpen(false);
  const handleSecondClose = () => setSecondOpen(false);

  return (
    <>
      <Button onClick={toggleFirstModal}>Open Modal with Long Content</Button>

      <Modal id="example_long_content" isOpen={isFirstOpen} onClose={handleFirstClose}>
        <ModalDialog>
          <ModalHeader>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam mollitia
            perferendis reprehenderit, voluptate. Cum delectus dicta
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
          <ModalFooter>
            <Button data-spirit-dismiss="modal" onClick={handleFirstClose}>
              Primary action
            </Button>
            <Button color="secondary" onClick={handleFirstClose}>
              Secondary action
            </Button>
          </ModalFooter>
        </ModalDialog>
      </Modal>

      <Button onClick={toggleSecondModal}>Open Modal with ScrollView</Button>

      <Modal id="example_scroll_view" isOpen={isSecondOpen} onClose={handleSecondClose}>
        <ModalDialog>
          <ModalHeader>Modal with ScrollView</ModalHeader>
          <ScrollView data-spirit-toggle="scrollView" overflowDecorators="both">
            <ModalBody>
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam
                mollitia perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus
                perferendis provident unde. Eveniet, iste, molestiae?
              </p>
            </ModalBody>
          </ScrollView>
          <ModalFooter>
            <Button onClick={handleSecondClose}>Primary action</Button>
            <Button color="secondary" onClick={handleSecondClose}>
              Secondary action
            </Button>
          </ModalFooter>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default ModalScrollingLongContent;
