import React, { ChangeEvent, useState } from 'react';
import { AlignmentXDictionaryType } from '../../..';
import { Button, Checkbox, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, Radio, TextField } from '../..';

const ModalDefault = () => {
  const [isFirstOpen, setFirstOpen] = useState(false);
  const [isSecondOpen, setSecondOpen] = useState(false);
  const [isThirdOpen, setThirdOpen] = useState(false);
  const [footerAlign, setFooterAlign] = useState<AlignmentXDictionaryType>('right');
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleFirstModal = () => setFirstOpen(!isFirstOpen);
  const toggleSecondModal = () => setSecondOpen(!isSecondOpen);
  const toggleThirdModal = () => setThirdOpen(!isSecondOpen);
  const toggleIsExpanded = () => setIsExpanded(!isExpanded);

  const handleFirstClose = () => setFirstOpen(false);
  const handleSecondClose = () => setSecondOpen(false);
  const handleThirdClose = () => setThirdOpen(false);
  const handleFooterAlignChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFooterAlign(e.target.value as AlignmentXDictionaryType);
  };

  return (
    <>
      <Button onClick={toggleFirstModal}>Open Modal</Button>

      <Modal id="example_basic" isOpen={isFirstOpen} onClose={handleFirstClose}>
        <ModalDialog isExpandedOnMobile={isExpanded}>
          <ModalHeader id="example_basic">Modal Title</ModalHeader>
          <ModalBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam mollitia
              perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus perferendis
              provident unde. Eveniet, iste, molestiae?
            </p>
            <form className="d-none d-tablet-block">
              <div>Footer alignment (from tablet up):</div>
              <Radio
                id="footer_alignment_left"
                UNSAFE_className="mr-600"
                label="Left"
                value="left"
                name="footer_alignment"
                autoComplete="off"
                isChecked={footerAlign === 'left'}
                onChange={handleFooterAlignChange}
              />
              <Radio
                id="footer_alignment_center"
                UNSAFE_className="mr-600"
                label="Center"
                value="center"
                name="footer_alignment"
                autoComplete="off"
                isChecked={footerAlign === 'center'}
                onChange={handleFooterAlignChange}
              />
              <Radio
                id="footer_alignment_right"
                UNSAFE_className="mr-600"
                label="Right"
                value="right"
                name="footer_alignment"
                autoComplete="off"
                isChecked={footerAlign === 'right'}
                onChange={handleFooterAlignChange}
              />
            </form>
            <form className="d-tablet-none">
              <Checkbox
                id="expand_on_mobile"
                label="Expand on mobile"
                value="right"
                autoComplete="off"
                onChange={toggleIsExpanded}
                isChecked={isExpanded}
              />
            </form>
          </ModalBody>
          <ModalFooter description="Optional description" alignmentX={footerAlign}>
            <Button data-spirit-dismiss="modal" data-spirit-target="#example_basic">
              Primary action
            </Button>
            <Button color="secondary" data-spirit-dismiss="modal" data-spirit-target="#example_basic">
              Secondary action
            </Button>
          </ModalFooter>
        </ModalDialog>
      </Modal>

      <Button onClick={toggleSecondModal}>Open Modal with a Form</Button>

      <Modal id="example_form" isOpen={isSecondOpen} onClose={handleSecondClose}>
        <ModalDialog elementType="form" method="dialog">
          <ModalHeader>Modal with a Form</ModalHeader>
          <ModalBody>
            <TextField UNSAFE_className="mb-400" label="Label" id="textfield" placeholder="TextField" />
            <p>
              The primary action is a button with <code>type=&quot;submit&quot;</code> and closes the dialog on
              submission.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button type="submit">Primary action</Button>
            <Button color="secondary" data-spirit-dismiss="modal" data-spirit-target="#example_form">
              Secondary action
            </Button>
          </ModalFooter>
        </ModalDialog>
      </Modal>

      <Button onClick={toggleThirdModal}>Open Modal with Custom Height</Button>

      <Modal id="example_custom_height" isOpen={isThirdOpen} onClose={handleThirdClose}>
        <ModalDialog
          elementType="form"
          isExpandedOnMobile={false}
          maxHeightFromTabletUp="700px"
          method="dialog"
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
            <Button type="submit">Primary action</Button>
            <Button color="secondary" data-spirit-dismiss="modal" data-spirit-target="#example_custom_height">
              Secondary action
            </Button>
          </ModalFooter>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default ModalDefault;
