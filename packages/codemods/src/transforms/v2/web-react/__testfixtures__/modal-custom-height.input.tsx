import React from 'react';
// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { ModalDialog } from '@lmc-eu/spirit-web-react';

export const MyComponent = () => (
  <>
    <ModalDialog preferredHeightOnMobile="400px" />
    <ModalDialog preferredHeightFromTabletUp="500px" />
    <ModalDialog maxHeightFromTabletUp="600px" />
    <ModalDialog preferredHeightOnMobile="400px" preferredHeightFromTabletUp="500px" />
  </>
);
