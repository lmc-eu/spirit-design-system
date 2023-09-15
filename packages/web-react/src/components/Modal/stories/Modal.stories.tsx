import React, { useState } from 'react';
import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { SpiritModalProps } from '../../../types';
import { Button } from '../../Button';
import ReadMe from '../README.md';
import { Modal, ModalHeader, ModalDialog, ModalBody, ModalFooter } from '..';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    id: {
      control: 'text',
    },
    isOpen: {
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      },
    },
    onClose: {
      control: 'function',
    },
  },
  args: {
    id: 'modal',
    isOpen: false,
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalWithHooks = (args: SpiritModalProps) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  const handleClose = () => {
    setModalOpen(false);
  };

  const { isOpen } = args;

  return (
    <>
      <Button onClick={toggleModal} aria-expanded={isOpen || isModalOpen}>
        Open Modal
      </Button>
      <Modal {...args} isOpen={isOpen || isModalOpen} onClose={handleClose}>
        <ModalDialog preferredHeightOnMobile="500px">
          <ModalHeader>Modal Header</ModalHeader>
          <ModalBody>Body</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleClose}>
              Confirm
            </Button>
            <Button color="tertiary" onClick={handleClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalDialog>
      </Modal>
    </>
  );
};

export const Playground: Story = {
  name: 'Modal',
  render: (args) => <ModalWithHooks {...args} />,
};
