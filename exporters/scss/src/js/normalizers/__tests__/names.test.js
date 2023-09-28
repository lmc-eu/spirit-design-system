import { slugifyName } from '../names';

describe('slugifyName', () => {
  it.each([
    // name, expected
    ['test', 'test'],
    ['test--test', 'test-test'],
    ['test test', 'test-test'],
    ['test--12--TEST', 'test-test'],
  ])('should clean name', (name, expected) => {
    expect(slugifyName(name)).toBe(expected);
  });
});
