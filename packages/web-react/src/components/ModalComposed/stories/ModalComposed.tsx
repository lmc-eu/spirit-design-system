// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import { ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import ModalComposed from '../ModalComposed';
import ModalComposedDialog from '../ModalComposedDialog';
import ModalComposedBody from '../ModalComposedBody';
import ModalComposedHeader from '../ModalComposedHeader';
import ModalComposedFooter from '../ModalComposedFooter';
import { Button } from '../../Button';

const Story: ComponentStory<typeof ModalComposed> = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleModal = () => setOpen(!isOpen);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <Button onClick={toggleModal} aria-expanded={isOpen}>
          {isOpen ? 'Close' : 'Open'} Modal
        </Button>
      </div>
      <ModalComposed id="ModalExample" isOpen={isOpen} onClose={handleClose}>
        <ModalComposedDialog>
          <ModalComposedHeader>Modal title</ModalComposedHeader>
          <ModalComposedBody>Body</ModalComposedBody>
          <ModalComposedFooter>
            <Button color="primary" onClick={handleClose}>
              Confirm
            </Button>
            <Button color="tertiary" onClick={handleClose}>
              Cancel
            </Button>
          </ModalComposedFooter>
        </ModalComposedDialog>
      </ModalComposed>
    </>
  );
};

export default Story;
