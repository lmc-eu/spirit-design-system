import React from 'react';
import { Link } from '../../Link';
import ToastBar from '../ToastBar';

const ToastColors = () => {
  return (
    <>
      <ToastBar id="inverted" onClose={() => {}} color="inverted" hasIcon isDismissible>
        Inverted
        <Link href="#" color="inverted" isUnderlined>
          Action
        </Link>
      </ToastBar>
      <ToastBar id="informative" onClose={() => {}} color="informative" hasIcon isDismissible>
        Informative
        <Link href="#" color="inverted" isUnderlined>
          Action
        </Link>
      </ToastBar>
      <ToastBar id="success" onClose={() => {}} color="success" hasIcon isDismissible>
        Success
        <Link href="#" color="inverted" isUnderlined>
          Action
        </Link>
      </ToastBar>
      <ToastBar id="warning" onClose={() => {}} color="warning" hasIcon isDismissible>
        Warning
        <Link href="#" color="inverted" isUnderlined>
          Action
        </Link>
      </ToastBar>
      <ToastBar id="danger" onClose={() => {}} color="danger" hasIcon isDismissible>
        Danger
        <Link href="#" color="inverted" isUnderlined>
          Action
        </Link>
      </ToastBar>
    </>
  );
};

export default ToastColors;
