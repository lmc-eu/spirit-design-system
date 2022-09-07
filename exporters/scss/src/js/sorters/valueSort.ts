import type { Token } from '../index';

export function valueSort(a: Token, b: Token) {
  // Value is defined as `Record<string, unknown>;`
  // @ts-expect-error TS2571: Object is of type 'unknown'.
  return +a.value.text - +b.value.text;
}
