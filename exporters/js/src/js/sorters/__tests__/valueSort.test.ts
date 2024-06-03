import token1 from '../__fixtures__/token1.json';
import token2 from '../__fixtures__/token2.json';
import token3 from '../__fixtures__/token3.json';
import token4 from '../__fixtures__/token4.json';
import token5 from '../__fixtures__/token5.json';
import token6 from '../__fixtures__/token6.json';
import { valueSort } from '../valueSort';

describe('valueSort', () => {
  it.each([
    // > 0 sort a after b
    // < 0 sort a before b
    // === 0 keep original order of a and b
    // tokenA, tokenB, expected
    [token1, token2, -10],
    [token4, token3, 10],
    [token5, token6, -10],
  ])('should sort tokens based on locale', (tokenA, tokenB, expected) => {
    expect(valueSort(tokenA, tokenB)).toBe(expected);
  });
});
