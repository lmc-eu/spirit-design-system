import React from 'react';
import { ToastProvider } from '../ToastContext';
import { useToast } from '../useToast';
import UncontrolledToast from '../UncontrolledToast';
import { Button } from '../../Button';
import { Link } from '../../Link';

const ToastTextWithLink = (
  <>
    Hello, World! This is a toast message with an action.
    <Link href="#" color="inverted" isUnderlined>
      Action
    </Link>
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
