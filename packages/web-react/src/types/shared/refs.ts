import { Ref } from 'react';

export interface DOMRefValue<T extends HTMLElement = HTMLElement> {
  UNSAFE_getDOMNode(): T;
}

export type DOMRef<T extends HTMLElement = HTMLElement> = Ref<DOMRefValue<T>>;
