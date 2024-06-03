import type { Token } from '../index';
import { slugifyName } from '../normalizers/names';

export function localeSort(a: Token, b: Token) {
  const aCompare = slugifyName(a.origin ? a.origin.name : a.name);
  const bCompare = slugifyName(b.origin ? b.origin.name : b.name);

  return aCompare.localeCompare(bCompare);
}
