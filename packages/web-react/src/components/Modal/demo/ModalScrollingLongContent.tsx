import React, { Ref, useState } from 'react';
import { Button, Dropdown, Item, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ScrollView } from '../..';
import { DropdownRenderProps } from '../../../types';

const ModalScrollingLongContent = () => {
  const [isFirstOpen, setFirstOpen] = useState(false);
  const [isSecondOpen, setSecondOpen] = useState(false);
  const [isThirdOpen, setThirdOpen] = useState(false);
  const [isModalWithDropdownOpen, setModalWithDropdownOpen] = useState(false);

  const toggleFirstModal = () => setFirstOpen(!isFirstOpen);
  const toggleSecondModal = () => setSecondOpen(!isSecondOpen);
  const toggleThirdModal = () => setThirdOpen(!isThirdOpen);
  const toggleModalWithDropdown = () => setModalWithDropdownOpen(!isModalWithDropdownOpen);

  const handleFirstClose = () => setFirstOpen(false);
  const handleSecondClose = () => setSecondOpen(false);
  const handleThirdClose = () => setThirdOpen(false);
  const handleModalWithDropdownClose = () => setModalWithDropdownOpen(false);

  const dropdownTrigger = ({ trigger: { className, ref, ...restOf } }: DropdownRenderProps) => (
    <Button color="secondary" UNSAFE_className={className} ref={ref as Ref<HTMLButtonElement>} {...restOf}>
      Dropdown
    </Button>
  );

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

      <Button onClick={toggleThirdModal}>Open Modal with Disabled Scrolling Inside</Button>

      <Modal id="example-non-scrolling-modal" isOpen={isThirdOpen} onClose={handleThirdClose}>
        <ModalDialog isScrollable={false}>
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
            <Button onClick={handleThirdClose}>Primary action</Button>
            <Button color="secondary" onClick={handleThirdClose}>
              Secondary action
            </Button>
          </ModalFooter>
        </ModalDialog>
      </Modal>

      <Button onClick={toggleModalWithDropdown}>Open Non-Scrolling Modal with Dropdown</Button>

      <Modal id="example-dropdown" isOpen={isModalWithDropdownOpen} onClose={handleModalWithDropdownClose}>
        <ModalDialog isScrollable={false}>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam mollitia
              perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus perferendis
              provident unde. Eveniet, iste, molestiae?
            </p>
            <Dropdown id="dropdown-in-modal" renderTrigger={dropdownTrigger}>
              <Item elementType="a" href="#" label="Action" />
              <Item elementType="a" href="#" label="Another action" />
              <Item elementType="a" href="#" label="Something else here" />
            </Dropdown>
          </ModalBody>
          <ModalFooter description="Optional description">
            <Button onClick={handleModalWithDropdownClose}>Primary action</Button>
            <Button color="secondary" onClick={handleModalWithDropdownClose}>
              Secondary action
            </Button>
          </ModalFooter>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default ModalScrollingLongContent;
