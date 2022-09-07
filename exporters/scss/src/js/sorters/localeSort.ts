import { cleanName } from '../normalizers/names';
import type { Token } from '../index';

export function localeSort(a: Token, b: Token) {
  const aCompare = cleanName(a.origin ? a.origin.name : a.name);
  const bCompare = cleanName(b.origin ? b.origin.name : b.name);

  return aCompare.localeCompare(bCompare);
}
