import { Ref, RefAttributes } from 'react';

export interface DOMRefValue<T extends HTMLElement = HTMLElement> {
  UNSAFE_getDOMNode(): T;
}

export type DOMRef<T extends HTMLElement = HTMLElement> = Ref<DOMRefValue<T>>;

export type PolymorphicForwardRef = <T, P>(
  render: (props: P, ref: Ref<T>) => JSX.Element,
) => (props: P & RefAttributes<T>) => JSX.Element;
