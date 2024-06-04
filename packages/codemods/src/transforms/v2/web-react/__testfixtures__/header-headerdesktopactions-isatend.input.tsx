import React from 'react';
// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { HeaderDesktopActions } from '@lmc-eu/spirit-web-react';

export const MyComponent = () => (
  <>
    <HeaderDesktopActions />
    <HeaderDesktopActions color="primary" />
    <HeaderDesktopActions color="secondary" />
  </>
);
