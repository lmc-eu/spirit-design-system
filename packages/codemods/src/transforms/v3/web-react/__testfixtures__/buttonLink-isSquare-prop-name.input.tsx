import React from 'react';
// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { ButtonLink } from '@lmc-eu/spirit-web-react';

export const MyComponent = () => (
  <>
    <ButtonLink href="" isSquare>
      Click me
    </ButtonLink>
    <ButtonLink elementType="div" isSquare>
      Click me
    </ButtonLink>
    <ButtonLink isDisabled isSquare>
      Click me
    </ButtonLink>
    <ButtonLink color="primary">Click me</ButtonLink>
    <ButtonLink isDisabled isSquare={false}>
      Click me
    </ButtonLink>
    <ButtonLink isDisabled isSquare={true}>
      Click me
    </ButtonLink>
  </>
);
