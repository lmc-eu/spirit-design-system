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
  const { show } = useToast();

  return (
    <Button
      type="button"
      onClick={() => {
        show(ToastTextWithLink, 'toast-id', { color: 'danger', iconName: 'download' });
      }}
    >
      Show Toast
    </Button>
  );
};

const UncontrolledToastDemo = () => {
  return (
    <ToastProvider>
      <ShowToastButton />
      <UncontrolledToast alignmentX="right" alignmentY="top" hasIcon closeLabel="Close" />
    </ToastProvider>
  );
};

export default UncontrolledToastDemo;
