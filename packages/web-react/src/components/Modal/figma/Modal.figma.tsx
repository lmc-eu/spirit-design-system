import figma from '@figma/code-connect';
import React from 'react';
import { Button } from '../../Button';
import { ScrollView } from '../../ScrollView';
import Modal from '../Modal';
import ModalBody from '../ModalBody';
import ModalDialog from '../ModalDialog';
import ModalFooter from '../ModalFooter';
import ModalHeader from '../ModalHeader';

const commonProps = {
  alignmentY: figma.enum('Alignment Y', {
    Bottom: 'bottom',
  }),
  isDockedOnMobile: figma.boolean('Docked On Mobile'),
};

const MODAL_NODE_URL = '<FIGMA_FILE_ID>?node-id=9314%3A4045';

figma.connect(Modal, MODAL_NODE_URL, {
  props: commonProps,
  variant: {
    'Layout Examples': 'Responsive Height',
  },
  example: (props) => (
    <Modal alignmentY={props.alignmentY} id="modal-example" isOpen onClose={() => {}}>
      <ModalDialog isDockedOnMobile={props.isDockedOnMobile}>
        <ModalHeader>Title of the Modal</ModalHeader>
        <ModalBody>Modal body</ModalBody>
        <ModalFooter description="Modal footer description">
          <Button onClick={() => {}}>Button</Button>
        </ModalFooter>
      </ModalDialog>
    </Modal>
  ),
});

figma.connect(Modal, MODAL_NODE_URL, {
  props: commonProps,
  variant: {
    'Layout Examples': 'Fixed Height',
  },
  example: (props) => (
    <Modal alignmentY={props.alignmentY} id="modal-example" isOpen onClose={() => {}}>
      <ModalDialog isDockedOnMobile={props.isDockedOnMobile} height="560px">
        <ModalHeader>Title of the Modal</ModalHeader>
        <ModalBody>Modal body</ModalBody>
        <ModalFooter description="Footer description">
          <Button onClick={() => {}}>Button</Button>
          <Button color="secondary" onClick={() => {}}>
            Button
          </Button>
        </ModalFooter>
      </ModalDialog>
    </Modal>
  ),
});

figma.connect(Modal, MODAL_NODE_URL, {
  props: commonProps,
  variant: {
    'Layout Examples': 'Scroll View',
  },
  example: (props) => (
    <Modal alignmentY={props.alignmentY} id="modal-example" isOpen onClose={() => {}}>
      <ModalDialog isDockedOnMobile={props.isDockedOnMobile} isScrollable>
        <ModalHeader>Title of the Modal</ModalHeader>
        <ScrollView overflowDecorators="both">
          <ModalBody>…Long content…</ModalBody>
        </ScrollView>
        <ModalFooter description="Modal footer description">
          <Button onClick={() => {}}>Button</Button>
          <Button color="secondary" onClick={() => {}}>
            Button
          </Button>
        </ModalFooter>
      </ModalDialog>
    </Modal>
  ),
});

figma.connect(Modal, MODAL_NODE_URL, {
  props: commonProps,
  variant: {
    'Layout Examples': 'Illustration',
  },
  example: (props) => (
    <Modal alignmentY={props.alignmentY} id="modal-example" isOpen onClose={() => {}}>
      <ModalDialog isDockedOnMobile={props.isDockedOnMobile}>
        <ModalHeader aria-label="Accessible Modal Title" />
        <ModalBody>Modal body</ModalBody>
        <ModalFooter description="Modal footer description" alignmentX="center">
          <Button onClick={() => {}}>Button</Button>
          <Button color="secondary" onClick={() => {}}>
            Button
          </Button>
        </ModalFooter>
      </ModalDialog>
    </Modal>
  ),
});
