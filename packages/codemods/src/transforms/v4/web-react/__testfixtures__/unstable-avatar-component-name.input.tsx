import React from 'react';
// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { UNSTABLE_Avatar } from '@lmc-eu/spirit-web-react';

export const MyComponent = () => (
  <>
    <UNSTABLE_Avatar elementType="a" href="#" size="small" aria-label="Profile of Jiří Bárta">
      <span aria-hidden="true">JB</span>
    </UNSTABLE_Avatar>
  </>
);
