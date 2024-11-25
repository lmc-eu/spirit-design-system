import { ElementType } from 'react';

export type LinkHrefProps<E extends ElementType> = E extends 'a'
  ? { href: string; elementType?: E; target?: '_blank'; title?: string }
  : { href?: string; elementType: E };
