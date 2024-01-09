import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ModalDialogProps } from '../../../types';
import { Button } from '../../Button';
import { Modal, ModalHeader, ModalDialog, ModalBody, ModalFooter } from '..';

const meta: Meta<typeof ModalDialog> = {
  title: 'Components/Modal',
  component: ModalDialog,
  argTypes: {
    isDockedOnMobile: {
      control: 'boolean',
      description: `**REQUIRES FEATURE FLAG** which is turned on in this demo. To view Modal without feature flag, navigate
      to the "Modal" story in the "Components/Modal" section of the sidebar.`,
    },
    isExpandedOnMobile: {
      control: 'boolean',
    },
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
    isDockedOnMobile: false,
    isExpandedOnMobile: false,
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
    <div className="spirit-feature-modal-enable-uniform-dialog">
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
    </div>
  );
};

export const ModalDialogPlayground: Story = {
  name: 'ModalDialog',
  render: (args) => <ModalWithHooks {...args} />,
};
