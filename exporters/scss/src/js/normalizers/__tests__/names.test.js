import { cleanName } from '../names';

describe('cleanName', () => {
  it.each([
    // name, expected
    ['test', 'test'],
    ['test--test', 'test-test'],
  ])('should clean name', (name, expected) => {
    expect(cleanName(name)).toBe(expected);
  });
});
