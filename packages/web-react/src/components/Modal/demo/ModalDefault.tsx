import React, { ChangeEvent, useState } from 'react';
import { AlignmentX, AlignmentXDictionaryType, AlignmentY, AlignmentYDictionaryType } from '../../..';
import { Button, Checkbox, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, Radio, TextField } from '../..';

const ModalDefault = () => {
  const [isFirstOpen, setFirstOpen] = useState(false);
  const [isSecondOpen, setSecondOpen] = useState(false);
  const [isThirdOpen, setThirdOpen] = useState(false);
  const [modalAlign, setModalAlign] = useState<AlignmentYDictionaryType>(AlignmentY.CENTER);
  const [footerAlign, setFooterAlign] = useState<AlignmentXDictionaryType>(AlignmentX.RIGHT);
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleFirstModal = () => setFirstOpen(!isFirstOpen);
  const toggleSecondModal = () => setSecondOpen(!isSecondOpen);
  const toggleThirdModal = () => setThirdOpen(!isSecondOpen);
  const toggleIsExpanded = () => setIsExpanded(!isExpanded);

  const handleFirstClose = () => setFirstOpen(false);
  const handleSecondClose = () => setSecondOpen(false);
  const handleThirdClose = () => setThirdOpen(false);
  const handleModalAlignChange = (event: ChangeEvent<HTMLInputElement>) => {
    setModalAlign(event.target.value as AlignmentYDictionaryType);
  };
  const handleFooterAlignChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFooterAlign(event.target.value as AlignmentXDictionaryType);
  };

  return (
    <>
      <Button onClick={toggleFirstModal}>Open Modal</Button>

      <Modal alignmentY={modalAlign} id="example-basic" isOpen={isFirstOpen} onClose={handleFirstClose}>
        <ModalDialog isExpandedOnMobile={isExpanded}>
          <ModalHeader id="example-basic">Modal Title</ModalHeader>
          <ModalBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam mollitia
              perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus perferendis
              provident unde. Eveniet, iste, molestiae?
            </p>
            <form className="d-none d-tablet-block mb-600">
              <div>Modal alignment (from tablet up):</div>
              <Radio
                id="modal-alignment-top"
                marginRight="space-600"
                label="Top"
                value="top"
                name="modal_alignment"
                autoComplete="off"
                isChecked={modalAlign === AlignmentY.TOP}
                onChange={handleModalAlignChange}
              />{' '}
              <Radio
                id="modal-alignment-center"
                marginRight="space-600"
                label="Center"
                value="center"
                name="modal_alignment"
                autoComplete="off"
                isChecked={modalAlign === AlignmentY.CENTER}
                onChange={handleModalAlignChange}
              />{' '}
              <Radio
                id="modal-alignment-bottom"
                marginRight="space-600"
                label="Bottom"
                value="bottom"
                name="modal_alignment"
                autoComplete="off"
                isChecked={modalAlign === AlignmentY.BOTTOM}
                onChange={handleModalAlignChange}
              />
            </form>
            <form className="d-none d-tablet-block">
              <div>Footer alignment (from tablet up):</div>
              <Radio
                id="footer-alignment-left"
                marginRight="space-600"
                label="Left"
                value="left"
                name="footer_alignment"
                autoComplete="off"
                isChecked={footerAlign === AlignmentX.LEFT}
                onChange={handleFooterAlignChange}
              />{' '}
              <Radio
                id="footer-alignment-center"
                marginRight="space-600"
                label="Center"
                value="center"
                name="footer_alignment"
                autoComplete="off"
                isChecked={footerAlign === AlignmentX.CENTER}
                onChange={handleFooterAlignChange}
              />{' '}
              <Radio
                id="footer-alignment-right"
                marginRight="space-600"
                label="Right"
                value="right"
                name="footer_alignment"
                autoComplete="off"
                isChecked={footerAlign === AlignmentX.RIGHT}
                onChange={handleFooterAlignChange}
              />
            </form>
            <form className="d-tablet-none">
              <Checkbox
                id="expand-on-mobile"
                label="Expand on mobile"
                value="right"
                autoComplete="off"
                onChange={toggleIsExpanded}
                isChecked={isExpanded}
              />
            </form>
          </ModalBody>
          <ModalFooter alignmentX={footerAlign} description="Optional description">
            <Button onClick={handleFirstClose}>Primary action</Button>
            <Button color="secondary" onClick={handleFirstClose}>
              Secondary action
            </Button>
          </ModalFooter>
        </ModalDialog>
      </Modal>

      <Button onClick={toggleSecondModal}>Open Modal with a Form</Button>

      <Modal id="example-form" isOpen={isSecondOpen} onClose={handleSecondClose}>
        <ModalDialog elementType="form" method="dialog">
          <ModalHeader>Modal with a Form</ModalHeader>
          <ModalBody>
            <TextField marginBottom="space-400" label="Label" id="textfield" placeholder="TextField" />
            <p>
              The primary action is a button with <code>type=&quot;submit&quot;</code> and closes the dialog on
              submission.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button type="submit">Primary action</Button>
            <Button color="secondary" onClick={handleSecondClose}>
              Secondary action
            </Button>
          </ModalFooter>
        </ModalDialog>
      </Modal>

      <Button onClick={toggleThirdModal}>Open Modal with Custom Height</Button>

      <Modal id="example-custom-height" isOpen={isThirdOpen} onClose={handleThirdClose}>
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
            <Button onClick={handleThirdClose}>Primary action</Button>
            <Button color="secondary" onClick={handleThirdClose}>
              Secondary action
            </Button>
          </ModalFooter>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default ModalDefault;
