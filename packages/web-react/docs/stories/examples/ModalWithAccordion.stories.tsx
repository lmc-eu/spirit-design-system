import React, { useState } from 'react';
import {
  Button,
  Icon,
  Pill,
  Modal,
  ModalDialog,
  ModalHeader,
  ModalBody,
  UncontrolledAccordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from '../../../src/components';
import { content } from '../../../src/components/Accordion/demo/Accordion';

export default {
  title: 'Examples/Compositions',
};

export const ModalWithAccordion = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleModal = () => setOpen(!isOpen);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={toggleModal} aria-expanded={isOpen} aria-controls="#ModalExample">
        {isOpen ? 'Close' : 'Open'} Modal
      </Button>
      <Modal id="ModalExample" isOpen={isOpen} onClose={handleClose}>
        <ModalDialog>
          <ModalHeader>
            <Button
              isSquare
              color="tertiary"
              onClick={toggleModal}
              aria-expanded={isOpen}
              aria-controls="#ModalExample"
            >
              <Icon name="close" />
            </Button>
          </ModalHeader>
          <ModalBody>
            <UncontrolledAccordion id="AccordionExample" defaultOpen="AccordionItemExample1">
              <AccordionItem id="AccordionItemExample0">
                <AccordionHeader slot={<Pill>3</Pill>}>Accordion Header #0</AccordionHeader>
                <AccordionContent>{content}</AccordionContent>
              </AccordionItem>
              <AccordionItem id="AccordionItemExample1">
                <AccordionHeader slot={<Pill>3</Pill>}>Accordion Header #1</AccordionHeader>
                <AccordionContent>{content}</AccordionContent>
              </AccordionItem>
              <AccordionItem id="AccordionItemExample2">
                <AccordionHeader>Accordion Header #2</AccordionHeader>
                <AccordionContent>{content}</AccordionContent>
              </AccordionItem>
              <AccordionItem id="AccordionItemExample3">
                <AccordionHeader slot={<Pill>3</Pill>}>Accordion Header #3</AccordionHeader>
                <AccordionContent>{content}</AccordionContent>
              </AccordionItem>
            </UncontrolledAccordion>
          </ModalBody>
        </ModalDialog>
      </Modal>
    </>
  );
};
