import React from 'react';
// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { Heading } from '@lmc-eu/spirit-web-react';

export const MyComponent = () => (
  <>
    <Heading elementType="div">Heading</Heading>
    <Heading elementType="div">Heading</Heading>
    <Heading elementType="h1">Heading</Heading>
    <Heading size="small" elementType="h1">
      Heading
    </Heading>
    <Heading elementType="h2" emphasis="bold">
      Heading
    </Heading>
    <Heading emphasis="bold" elementType="div">Heading</Heading>
    <Heading emphasis="bold" size="large" elementType="div">
      Heading
    </Heading>
  </>
);
