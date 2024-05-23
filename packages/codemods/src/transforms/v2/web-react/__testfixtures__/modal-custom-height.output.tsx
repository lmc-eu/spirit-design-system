import React from 'react';
// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { ModalDialog } from '@lmc-eu/spirit-web-react';

export const MyComponent = () => (
  <>
    <ModalDialog height={{
      mobile: '400px'
    }} />
    <ModalDialog height={{
      tablet: '500px'
    }} />
    <ModalDialog maxHeight={{
      tablet: '600px'
    }} />
    <ModalDialog
      height={{
        mobile: '400px',
        tablet: '500px'
      }} />
  </>
);
