import React from 'react';
// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { UNSTABLE_Truncate } from '@lmc-eu/spirit-web-react';

const longText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.';

export const MyComponent = () => (
  <>
    <UNSTABLE_Truncate lines={2}>{longText}</UNSTABLE_Truncate>
    <UNSTABLE_Truncate lines={3} elementType="div">
      {longText}
    </UNSTABLE_Truncate>
    <UNSTABLE_Truncate mode="words" limit={10}>
      {longText}
    </UNSTABLE_Truncate>
  </>
);
