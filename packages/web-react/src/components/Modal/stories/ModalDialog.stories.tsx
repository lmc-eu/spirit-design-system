import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ModalDialogProps } from '../../../types';
import { Button } from '../../Button';
import { Modal, ModalHeader, ModalDialog, ModalBody, ModalFooter } from '..';

const meta: Meta<typeof ModalDialog> = {
  title: 'Components/Modal',
  component: ModalDialog,
  argTypes: {
    maxHeightFromTabletUp: {
      control: 'text',
    },
    preferredHeightOnMobile: {
      control: 'text',
    },
    preferredHeightFromTabletUp: {
      control: 'text',
    },
  },
  args: {
    maxHeightFromTabletUp: '',
    preferredHeightOnMobile: '',
    preferredHeightFromTabletUp: '',
  },
};

export default meta;
type Story = StoryObj<typeof ModalDialog>;

const ModalWithHooks = (
  args: React.JSX.IntrinsicAttributes &
    Omit<ModalDialogProps<React.ElementType>, 'ref'> &
    React.RefAttributes<HTMLDivElement>,
) => {
  const [isOpen, setOpen] = useState(true);

  const toggleModal = () => setOpen(!isOpen);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={toggleModal} aria-expanded={isOpen}>
        Open Modal
      </Button>
      <Modal id="modal" isOpen={isOpen} onClose={handleClose}>
        <ModalDialog {...args}>
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

export const ModalDialogPlayground: Story = {
  name: 'ModalDialog',
  render: (args) => <ModalWithHooks {...args} />,
};
