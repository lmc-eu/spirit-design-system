// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { Button } from '@lmc-eu/spirit-web-react';

export const MyComponent = () => (
  <>
    <Button isSymmetrical>Click me</Button>
    <Button elementType="div" isSymmetrical>
      Click me
    </Button>
    <Button isDisabled isSymmetrical>
      Click me
    </Button>
    <Button color="primary">Click me</Button>
    <Button isDisabled isSymmetrical={false}>
      Click me
    </Button>
    <Button isDisabled isSymmetrical={true}>
      Click me
    </Button>
  </>
);
