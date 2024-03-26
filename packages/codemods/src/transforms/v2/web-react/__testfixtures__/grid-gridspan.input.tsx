import React from 'react';
// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { GridSpan } from '@lmc-eu/spirit-web-react';

export const MyComponent = () => (
  <>
    <GridSpan over={4} />
    <GridSpan over={2} tablet={4} desktop={6} />
    <GridSpan desktop={10} UNSAFE_className="test" />
  </>
);
