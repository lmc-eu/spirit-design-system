import React from 'react';
// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { UncontrolledCollapse } from '@lmc-eu/spirit-web-react';

export const MyComponent = () => (
  <>
    <UncontrolledCollapse id="collapse-1">collapse</UncontrolledCollapse>
    <UncontrolledCollapse id="collapse-2" isDisposable>
      collapse
    </UncontrolledCollapse>
  </>
);
