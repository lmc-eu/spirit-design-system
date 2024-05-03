import React, { useState } from 'react';
import { Button } from '../../Button';
import Toast from '../Toast';
import ToastBar from '../ToastBar';

const ToastStaticToast = () => {
  const [isOpen, setIsOpen] = useState(false);

  const buttonLabel = isOpen ? 'Hide' : 'Show';

  return (
    <>
      <fieldset className="mb-0" style={{ border: 0 }}>
        <legend className="mb-500">Show hidden toast in the DOM:</legend>
        <Button onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls="hidden-toast">
          {buttonLabel}
        </Button>
      </fieldset>

      <Toast alignmentX="center" alignmentY="top">
        <ToastBar
          id="hidden-toast"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          color="warning"
          hasIcon
          isDismissible
        >
          I was hidden and you exposed me!
        </ToastBar>
      </Toast>
    </>
  );
};

export default ToastStaticToast;
