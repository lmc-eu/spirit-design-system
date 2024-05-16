import React from 'react';
import { Button } from '../../Button';
import { ToastProvider } from '../ToastContext';
import ToastBarLink from '../ToastBarLink';
import ToastBarMessage from '../ToastBarMessage';
import UncontrolledToast from '../UncontrolledToast';
import { useToast } from '../useToast';

const ToastTextWithLink = (
  <>
    <ToastBarMessage>Hello, World! This is a toast message with an action.</ToastBarMessage>
    <ToastBarLink href="#">Action</ToastBarLink>
  </>
);

const ShowToastButton = () => {
  const { show, clear } = useToast();
  const uniqueId = Date.now().toString();

  return (
    <>
      <Button
        type="button"
        onClick={() => {
          show(ToastTextWithLink, uniqueId, { color: 'warning', isDismissible: true, hasIcon: true });
        }}
      >
        Show Toast
      </Button>
      <Button
        type="button"
        onClick={() => {
          show(ToastTextWithLink, uniqueId, { isDismissible: true, hasIcon: true });
        }}
      >
        Show Toast
      </Button>
      <Button
        type="button"
        onClick={() => {
          show(ToastTextWithLink, uniqueId, {
            color: 'danger',
            iconName: 'download',
            isDismissible: true,
            hasIcon: true,
            enableAutoClose: true,
            autoCloseInterval: 1500,
          });
        }}
      >
        Show Toast
      </Button>
      <Button
        type="button"
        color="danger"
        onClick={() => {
          clear();
        }}
      >
        Clear
      </Button>
    </>
  );
};

const UncontrolledToastDemo = () => {
  return (
    <ToastProvider>
      <ShowToastButton />
      <UncontrolledToast alignmentX="right" alignmentY="top" closeLabel="Close" />
    </ToastProvider>
  );
};

export default UncontrolledToastDemo;
