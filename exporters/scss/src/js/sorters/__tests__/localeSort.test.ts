import token1 from '../__fixtures__/token1.json';
import token2 from '../__fixtures__/token2.json';
import token3 from '../__fixtures__/token3.json';
import token4 from '../__fixtures__/token4.json';
import token5 from '../__fixtures__/token5.json';
import token6 from '../__fixtures__/token6.json';
import { localeSort } from '../localeSort';

describe('localeSort', () => {
  it.each([
    // > 0 sort a after b
    // < 0 sort a before b
    // === 0 keep original order of a and b
    // tokenA, tokenB, expected
    [token1, token2, -1],
    [token3, token4, 1],
    [token5, token6, 1],
  ])('should sort tokens based on locale', (tokenA, tokenB, expected) => {
    expect(localeSort(tokenA, tokenB)).toBe(expected);
  });
});
