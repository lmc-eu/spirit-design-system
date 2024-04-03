import React from 'react';
import { Link } from '../../Link';
import ToastBar from '../ToastBar';

const ToastContentVariations = () => {
  return (
    <>
      <ToastBar id="message-only">Message only</ToastBar>
      <ToastBar id="with-action">
        Message with action
        <Link href="#" color="inverted" isUnderlined>
          Action
        </Link>
      </ToastBar>
      <ToastBar id="long-text">
        When the text is long and reaches the maximum width limit, the action automatically wraps to the next line.
        <Link href="#" color="inverted" isUnderlined>
          Action
        </Link>
      </ToastBar>
      <ToastBar id="with-icon" hasIcon>
        Message with icon and action
        <Link href="#" color="inverted" isUnderlined>
          Action
        </Link>
      </ToastBar>
      <ToastBar id="dismissible" onClose={() => {}} isDismissible>
        Dismissible message
      </ToastBar>
      <ToastBar id="custom-icon" isDismissible iconName="download">
        Dismissible message with custom icon and action
        <Link href="#" color="inverted" isUnderlined>
          Action
        </Link>
      </ToastBar>
    </>
  );
};

export default ToastContentVariations;
