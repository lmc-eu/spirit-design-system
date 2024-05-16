import React from 'react';
import ToastBar from '../ToastBar';
import ToastBarLink from '../ToastBarLink';
import ToastBarMessage from '../ToastBarMessage';

const ToastColors = () => {
  return (
    <>
      <ToastBar id="inverted" onClose={() => {}} color="inverted" hasIcon isDismissible>
        <ToastBarMessage>Inverted</ToastBarMessage>
        <ToastBarLink href="#">Action</ToastBarLink>
      </ToastBar>
      <ToastBar id="informative" onClose={() => {}} color="informative" hasIcon isDismissible>
        <ToastBarMessage>Informative</ToastBarMessage>
        <ToastBarLink href="#">Action</ToastBarLink>
      </ToastBar>
      <ToastBar id="success" onClose={() => {}} color="success" hasIcon isDismissible>
        <ToastBarMessage>Success</ToastBarMessage>
        <ToastBarLink href="#">Action</ToastBarLink>
      </ToastBar>
      <ToastBar id="warning" onClose={() => {}} color="warning" hasIcon isDismissible>
        <ToastBarMessage>Warning</ToastBarMessage>
        <ToastBarLink href="#">Action</ToastBarLink>
      </ToastBar>
      <ToastBar id="danger" onClose={() => {}} color="danger" hasIcon isDismissible>
        <ToastBarMessage>Danger</ToastBarMessage>
        <ToastBarLink href="#">Action</ToastBarLink>
      </ToastBar>
    </>
  );
};

export default ToastColors;
