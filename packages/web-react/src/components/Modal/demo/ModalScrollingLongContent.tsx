import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ScrollView } from '../..';

const ModalScrollingLongContent = () => {
  const [isModalLongContentOpen, setModalLongContentOpen] = useState(false);
  const [isModalScrollViewOpen, setModalScrollViewOpen] = useState(false);
  const [isModalScrollingInsideOpen, setModalScrollingInsideOpen] = useState(false);
  const [isModalCustomHeightOpen, setModalCustomHeightOpen] = useState(false);

  const toggleModalLongContent = () => setModalLongContentOpen(!isModalLongContentOpen);
  const toggleModalScrollView = () => setModalScrollViewOpen(!isModalScrollViewOpen);
  const toggleModalScrollingInside = () => setModalScrollingInsideOpen(!isModalScrollingInsideOpen);
  const toggleModalCustomHeight = () => setModalCustomHeightOpen(!isModalCustomHeightOpen);
  const handleModalLongContentClose = () => setModalLongContentOpen(false);
  const handleModalScrollViewClose = () => setModalScrollViewOpen(false);
  const handleModalScrollingInsideClose = () => setModalScrollingInsideOpen(false);
  const handleModalCustomHeightClose = () => setModalCustomHeightOpen(false);

  return (
    <>
      <Button onClick={toggleModalLongContent}>Open Modal with Long Content</Button>

      <Modal id="example-long-content" isOpen={isModalLongContentOpen} onClose={handleModalLongContentClose}>
        <ModalDialog>
          <ModalHeader>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam mollitia
            perferendis reprehenderit, voluptate. Cum delectus dicta
          </ModalHeader>
          <ModalBody>
            {[...Array(9)].map((_, index) => {
              const key = `paragraph-${index}`;

              return (
                <p key={key}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam
                  mollitia perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus
                  perferendis provident unde. Eveniet, iste, molestiae?
                </p>
              );
            })}
          </ModalBody>
          <ModalFooter>
            <Button data-spirit-dismiss="modal" onClick={handleModalLongContentClose}>
              Primary action
            </Button>
            <Button color="secondary" onClick={handleModalLongContentClose}>
              Secondary action
            </Button>
          </ModalFooter>
        </ModalDialog>
      </Modal>

      <Button onClick={toggleModalScrollingInside}>Open Modal with Scrolling Inside</Button>

      <Modal id="example-scrolling-modal" isOpen={isModalScrollingInsideOpen} onClose={handleModalScrollingInsideClose}>
        <ModalDialog isScrollable>
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
            <p style={{ marginBottom: '100vh' }}>
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
            <Button onClick={handleModalScrollingInsideClose}>Primary action</Button>
            <Button color="secondary" onClick={handleModalScrollingInsideClose}>
              Secondary action
            </Button>
          </ModalFooter>
        </ModalDialog>
      </Modal>

      <Button onClick={toggleModalScrollView}>Open Modal with ScrollView</Button>

      <Modal id="example-scroll-view" isOpen={isModalScrollViewOpen} onClose={handleModalScrollViewClose}>
        <ModalDialog isScrollable>
          <ModalHeader>Modal with ScrollView</ModalHeader>
          <ScrollView data-spirit-toggle="scrollView" overflowDecorators="borders">
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
            <Button onClick={handleModalScrollViewClose}>Primary action</Button>
            <Button color="secondary" onClick={handleModalScrollViewClose}>
              Secondary action
            </Button>
          </ModalFooter>
        </ModalDialog>
      </Modal>

      <Button onClick={toggleModalCustomHeight}>Open Modal with Custom Height</Button>

      <Modal id="example-custom-height" isOpen={isModalCustomHeightOpen} onClose={handleModalCustomHeightClose}>
        <ModalDialog
          isExpandedOnMobile={false}
          isScrollable
          maxHeightFromTabletUp="700px"
          preferredHeightOnMobile="400px"
          preferredHeightFromTabletUp="500px"
        >
          <ModalHeader>Modal with Custom Height</ModalHeader>
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
            <Button onClick={handleModalCustomHeightClose}>Primary action</Button>
            <Button color="secondary" onClick={handleModalCustomHeightClose}>
              Secondary action
            </Button>
          </ModalFooter>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default ModalScrollingLongContent;
