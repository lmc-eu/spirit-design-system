import token10 from '../__fixtures__/token10.json';
import token7 from '../__fixtures__/token7.json';
import token8 from '../__fixtures__/token8.json';
import token9 from '../__fixtures__/token9.json';
import { breakpointSort } from '../breakpointSort';

describe('breakpointSort', () => {
  it.each([
    // > 0 sort a after b
    // < 0 sort a before b
    // === 0 keep original order of a and b
    // tokenA, tokenB, expected
    [token7, token8, 'mobile,tablet,desktop', false, 1],
    [token9, token10, 'mobile,tablet,desktop', false, 1],
  ])('should sort tokens based on locale', (tokenA, tokenB, breakpointsString, sortByValue, expected) => {
    expect(breakpointSort(tokenA, tokenB, breakpointsString, sortByValue)).toBe(expected);
  });
});
