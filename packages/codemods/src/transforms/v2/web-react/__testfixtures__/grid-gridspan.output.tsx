import React from 'react';
// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { GridItem } from '@lmc-eu/spirit-web-react';

export const MyComponent = () => (
  <>
    <GridItem columnStart={5} columnEnd="span 4">Item</GridItem>
    <GridItem
      columnStart={{
        mobile: 6,
        tablet: 5,
        desktop: 4,
      }}
      columnEnd={{
        mobile: 'span 2',
        tablet: 'span 4',
        desktop: 'span 6',
      }}>
      Item
    </GridItem>
    <GridItem
      UNSAFE_className="test"
      columnStart={{
        desktop: 2,
      }}
      columnEnd={{
        desktop: 'span 10',
      }}>
      Item
    </GridItem>
  </>
);
