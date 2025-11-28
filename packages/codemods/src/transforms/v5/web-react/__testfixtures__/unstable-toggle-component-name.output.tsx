import React from 'react';
// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { Toggle } from '@lmc-eu/spirit-web-react';

export const MyComponent = () => (
  <>
    <Toggle id="toggle-default" label="Toggle Label" name="default" />
    <Toggle id="toggle-default-v2" label="Toggle Label" name="default"></Toggle>
  </>
);
