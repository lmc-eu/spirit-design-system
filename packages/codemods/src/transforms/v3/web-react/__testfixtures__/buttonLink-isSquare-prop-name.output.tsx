// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { ButtonLink } from '@lmc-eu/spirit-web-react';

export const MyComponent = () => (
  <>
    <ButtonLink href="" isSymmetrical>
      Click me
    </ButtonLink>
    <ButtonLink elementType="div" isSymmetrical>
      Click me
    </ButtonLink>
    <ButtonLink isDisabled isSymmetrical>
      Click me
    </ButtonLink>
    <ButtonLink color="primary">Click me</ButtonLink>
    <ButtonLink isDisabled isSymmetrical={false}>
      Click me
    </ButtonLink>
    <ButtonLink isDisabled isSymmetrical={true}>
      Click me
    </ButtonLink>
  </>
);
