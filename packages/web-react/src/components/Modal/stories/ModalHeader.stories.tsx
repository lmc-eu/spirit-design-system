import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { ModalHeaderProps } from '../../../types';
import { Button } from '../../Button';
import { Modal, ModalHeader, ModalDialog, ModalBody, ModalFooter } from '..';

const meta: Meta<typeof ModalHeader> = {
  title: 'Components/Modal',
  component: ModalHeader,
  argTypes: {
    children: {
      control: 'text',
    },
    closeLabel: {
      control: 'text',
      table: {
        defaultValue: { summary: 'Close' },
      },
    },
  },
  args: {
    children: 'Modal Header',
  },
};

export default meta;
type Story = StoryObj<typeof ModalHeader>;

const ModalWithHooks = (args: ModalHeaderProps) => {
  const [isOpen, setOpen] = useState(true);

  const toggleModal = () => setOpen(!isOpen);

  const handleClose = () => {
    setOpen(false);
  };

  const { children } = args;

  return (
    <>
      <Button onClick={toggleModal} aria-expanded={isOpen}>
        Open Modal
      </Button>
      <Modal id="modal" isOpen={isOpen} onClose={handleClose}>
        <ModalDialog preferredHeightOnMobile="500px">
          <ModalHeader {...args}>{children}</ModalHeader>
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

export const ModalHeaderPlayground: Story = {
  name: 'ModalHeader',
  render: (args) => <ModalWithHooks {...args} />,
};
