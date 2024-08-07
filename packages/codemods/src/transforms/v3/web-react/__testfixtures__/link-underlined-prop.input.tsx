import React from 'react';
// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { Link } from '@lmc-eu/spirit-web-react';

export const MyComponent = () => (
  <>
    <Link />
    <Link isUnderlined />
    <Link isUnderlined={true} />
    <Link isUnderlined={false} />
  </>
);
