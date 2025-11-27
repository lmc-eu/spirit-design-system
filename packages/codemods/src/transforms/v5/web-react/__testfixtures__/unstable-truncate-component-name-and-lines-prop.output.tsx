import React from 'react';
// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { Truncate } from '@lmc-eu/spirit-web-react';

const longText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.';

export const MyComponent = () => (
  <>
    <Truncate mode="lines" limit={2}>{longText}</Truncate>
    <Truncate elementType="div" mode="lines" limit={3}>
      {longText}
    </Truncate>
    <Truncate mode="words" limit={10}>
      {longText}
    </Truncate>
  </>
);
