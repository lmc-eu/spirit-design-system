import React, { useState } from 'react';
import {
  Button,
  ModalComposed,
  ModalComposedDialog,
  ModalComposedHeader,
  ModalComposedBody,
  ModalComposedFooter,
} from '../../../src/components';

export default {
  title: 'Examples/Compositions',
};

export const ModalComposedStacked = () => {
  const [isFirstOpen, setFirstOpen] = useState(false);
  const [isSecondOpen, setSecondOpen] = useState(false);

  const toggleFirstModalComposed = () => setFirstOpen(!isFirstOpen);
  const toggleSecondModalComposed = () => setSecondOpen(!isSecondOpen);

  const handleFirstClose = () => {
    setFirstOpen(false);
  };
  const handleSecondClose = () => {
    setSecondOpen(false);
  };

  return (
    <>
      <Button onClick={toggleFirstModalComposed} aria-expanded={isFirstOpen} aria-controls="#ModalComposedExample">
        {isFirstOpen ? 'Close' : 'Open'} ModalComposed
      </Button>
      <ModalComposed id="ModalExampleStacked" isOpen={isSecondOpen} onClose={handleSecondClose}>
        <ModalComposedDialog>
          <ModalComposedHeader>Modal composed stacked</ModalComposedHeader>
          <ModalComposedBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam mollitia
              mollitia perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus
              provident unde. Eveniet, iste, molestiae?
            </p>
          </ModalComposedBody>
          <ModalComposedFooter>
            <Button color="primary" onClick={handleSecondClose}>
              Confirm
            </Button>
            <Button color="tertiary" onClick={handleSecondClose}>
              Cancel
            </Button>
          </ModalComposedFooter>
        </ModalComposedDialog>
      </ModalComposed>
      <ModalComposed id="ModalExample" isOpen={isFirstOpen} onClose={handleFirstClose}>
        <ModalComposedDialog>
          <ModalComposedHeader>Modal composed</ModalComposedHeader>
          <ModalComposedBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam mollitia
              mollitia perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus
              provident unde. Eveniet, iste, molestiae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam mollitia
              mollitia perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus
              provident unde. Eveniet, iste, molestiae?
            </p>
          </ModalComposedBody>
          <ModalComposedFooter>
            <Button color="primary" onClick={toggleSecondModalComposed}>
              Open stacked
            </Button>
            <Button color="tertiary" onClick={handleFirstClose}>
              Cancel
            </Button>
          </ModalComposedFooter>
        </ModalComposedDialog>
      </ModalComposed>
    </>
  );
};
