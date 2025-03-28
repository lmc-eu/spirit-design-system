import React from 'react';
// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { ToastBar } from '@lmc-eu/spirit-web-react';

export const MyComponent = () => (
  <>
    <ToastBar color="inverted" />
    <ToastBar color="success" />
    <ToastBar />
  </>
);
