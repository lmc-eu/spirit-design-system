import React, { ChangeEvent, useState } from 'react';
import { AlignmentX, AlignmentXDictionaryType, AlignmentY, AlignmentYDictionaryType } from '../../..';
import { Button, Checkbox, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, Radio, Stack } from '../..';

const ModalDefault = () => {
  const [isOpen, setOpen] = useState(false);
  const [modalAlign, setModalAlign] = useState<AlignmentYDictionaryType>(AlignmentY.CENTER);
  const [footerAlign, setFooterAlign] = useState<AlignmentXDictionaryType>(AlignmentX.RIGHT);
  const [isDockedOnMobile, setIsDockedOnMobile] = useState(false);
  const [isExpandedOnMobile, setIsExpandedOnMobile] = useState(false);
  const [isScrollable, setIsScrollable] = useState(true);

  const toggleModal = () => setOpen(!isOpen);

  const handleClose = () => setOpen(false);
  const handleModalAlignChange = (event: ChangeEvent<HTMLInputElement>) => {
    setModalAlign(event.target.value as AlignmentYDictionaryType);
  };
  const handleFooterAlignChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFooterAlign(event.target.value as AlignmentXDictionaryType);
  };
  const handleDockedOnMobileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsDockedOnMobile(event.target.checked);
  };
  const handleExpandedOnMobileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsExpandedOnMobile(event.target.checked);
  };
  const handleScrollableChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsScrollable(event.target.checked);
  };

  return (
    <>
      {/* Set `display: contents` to enable parent stack layout. */}
      <div className="spirit-feature-modal-enable-uniform-dialog" style={{ display: 'contents' }}>
        <Button onClick={toggleModal}>Open Modal</Button>

        <Modal alignmentY={modalAlign} id="example-uniform" isOpen={isOpen} onClose={handleClose}>
          <ModalDialog
            isExpandedOnMobile={isExpandedOnMobile}
            isDockedOnMobile={isDockedOnMobile}
            isScrollable={isScrollable}
          >
            <ModalHeader>Modal Title</ModalHeader>
            <ModalBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam
                mollitia mollitia perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi
                natus provident unde. Eveniet, iste, molestiae?
              </p>
              <form className="mb-600">
                <div>Modal alignment:</div>
                <Radio
                  id="modal-uniform-alignment-top"
                  UNSAFE_className="mr-600"
                  label="Top"
                  value="top"
                  name="modal_uniform_alignment"
                  autoComplete="off"
                  isChecked={modalAlign === AlignmentY.TOP}
                  onChange={handleModalAlignChange}
                />{' '}
                <Radio
                  id="modal-uniform-alignment-center"
                  UNSAFE_className="mr-600"
                  label="Center"
                  value="center"
                  name="modal_uniform_alignment"
                  autoComplete="off"
                  isChecked={modalAlign === AlignmentY.CENTER}
                  onChange={handleModalAlignChange}
                />{' '}
                <Radio
                  id="modal-uniform-alignment-bottom"
                  UNSAFE_className="mr-600"
                  label="Bottom"
                  value="bottom"
                  name="modal_uniform_alignment"
                  autoComplete="off"
                  isChecked={modalAlign === AlignmentY.BOTTOM}
                  onChange={handleModalAlignChange}
                />
              </form>
              <form className="d-none d-tablet-block mb-600">
                <div>Footer alignment (from tablet up):</div>
                <Radio
                  id="footer-uniform-alignment-left"
                  UNSAFE_className="mr-600"
                  label="Left"
                  value="left"
                  name="footer_uniform_alignment"
                  autoComplete="off"
                  isChecked={footerAlign === AlignmentX.LEFT}
                  onChange={handleFooterAlignChange}
                />{' '}
                <Radio
                  id="footer-uniform-alignment-center"
                  UNSAFE_className="mr-600"
                  label="Center"
                  value="center"
                  name="footer_uniform_alignment"
                  autoComplete="off"
                  isChecked={footerAlign === AlignmentX.CENTER}
                  onChange={handleFooterAlignChange}
                />{' '}
                <Radio
                  id="footer-uniform-alignment-right"
                  UNSAFE_className="mr-600"
                  label="Right"
                  value="right"
                  name="footer_uniform_alignment"
                  autoComplete="off"
                  isChecked={footerAlign === AlignmentX.RIGHT}
                  onChange={handleFooterAlignChange}
                />
              </form>
              <Stack hasSpacing elementType="form">
                <Checkbox
                  autoComplete="off"
                  id="modal-uniform-docked"
                  label="Dock on mobile"
                  name="modal-uniform-docked"
                  isChecked={isDockedOnMobile}
                  onChange={handleDockedOnMobileChange}
                />
                <Checkbox
                  autoComplete="off"
                  id="modal-uniform-expanded"
                  isDisabled={!isDockedOnMobile}
                  label="Expand on mobile (docked only)"
                  name="modal-uniform-expanded"
                  isChecked={isExpandedOnMobile}
                  onChange={handleExpandedOnMobileChange}
                />
                <Checkbox
                  autoComplete="off"
                  id="modal-uniform-non-scrolling"
                  label="Scrolling inside"
                  name="modal-uniform-non-scrolling"
                  isChecked={isScrollable}
                  onChange={handleScrollableChange}
                />
              </Stack>
            </ModalBody>
            <ModalFooter alignmentX={footerAlign} description="Optional description">
              <Button onClick={handleClose}>Primary action</Button>
              <Button color="secondary" onClick={handleClose}>
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
