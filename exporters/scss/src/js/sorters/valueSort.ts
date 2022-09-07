import type { Token } from '../index';

export function valueSort(a: Token, b: Token) {
  return +a.value.text - +b.value.text;
}
