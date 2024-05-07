import React, { ElementType } from 'react';
import { Header } from '../../src/components/Header';

export const withHeader = (Component: ElementType) => (props: unknown) => (
  <Header id="test">
    <Component {...(props as object)} />
  </Header>
);
