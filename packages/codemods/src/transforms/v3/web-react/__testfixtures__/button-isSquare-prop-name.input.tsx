// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { Button } from '@lmc-eu/spirit-web-react';

export const MyComponent = () => (
  <>
    <Button isSquare>Click me</Button>
    <Button elementType="div" isSquare>
      Click me
    </Button>
    <Button isDisabled isSquare>
      Click me
    </Button>
    <Button color="primary">Click me</Button>
    <Button isDisabled isSquare={false}>
      Click me
    </Button>
    <Button isDisabled isSquare={true}>
      Click me
    </Button>
  </>
);
