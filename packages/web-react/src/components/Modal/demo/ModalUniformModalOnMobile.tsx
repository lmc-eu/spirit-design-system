import React, { ChangeEvent, useState } from 'react';
import { AlignmentX, AlignmentXDictionaryType, AlignmentY, AlignmentYDictionaryType } from '../../..';
import { Button, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, Radio } from '../..';

const ModalDefault = () => {
  const [isFirstOpen, setFirstOpen] = useState(false);
  const [isSecondOpen, setSecondOpen] = useState(false);
  const [modalAlign, setModalAlign] = useState<AlignmentYDictionaryType>(AlignmentY.CENTER);
  const [footerAlign, setFooterAlign] = useState<AlignmentXDictionaryType>(AlignmentX.RIGHT);

  const toggleFirstModal = () => setFirstOpen(!isFirstOpen);
  const toggleSecondModal = () => setSecondOpen(!isSecondOpen);

  const handleFirstClose = () => setFirstOpen(false);
  const handleSecondClose = () => setSecondOpen(false);
  const handleModalAlignChange = (event: ChangeEvent<HTMLInputElement>) => {
    setModalAlign(event.target.value as AlignmentYDictionaryType);
  };
  const handleFooterAlignChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFooterAlign(event.target.value as AlignmentXDictionaryType);
  };

  return (
    <>
      {/* Set `display: contents` to enable parent stack layout. */}
      <div className="spirit-feature-modal-enable-uniform-dialog" style={{ display: 'contents' }}>
        <Button onClick={toggleFirstModal}>Open Modal</Button>

        <Modal alignmentY={modalAlign} id="example-uniform" isOpen={isFirstOpen} onClose={handleFirstClose}>
          <ModalDialog>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam
                mollitia mollitia perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi
                natus provident unde. Eveniet, iste, molestiae?
              </p>
              <form className="mb-tablet-600">
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
              <form className="d-none d-tablet-block">
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
            </ModalBody>
            <ModalFooter alignmentX={footerAlign} description="Optional description">
              <Button onClick={handleFirstClose}>Primary action</Button>
              <Button color="secondary" onClick={handleFirstClose}>
                Secondary action
              </Button>
            </ModalFooter>
          </ModalDialog>
        </Modal>

        <Button onClick={toggleSecondModal}>Open Docked Modal (mobile only)</Button>

        <Modal id="example-docked" isOpen={isSecondOpen} onClose={handleSecondClose}>
          <ModalDialog isDockedOnMobile isExpandedOnMobile>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam
                mollitia perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus
                perferendis provident unde. Eveniet, iste, molestiae?
              </p>
            </ModalBody>
            <ModalFooter description="Optional description">
              <Button onClick={handleSecondClose}>Primary action</Button>
              <Button color="secondary" onClick={handleSecondClose}>
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
