import { kebabCaseToCamelCase } from '../string';

describe('string', () => {
  describe('#kebabCaseToCamelCase', () => {
    it.each([
      ['foo-bar', 'fooBar'],
      ['test-case', 'testCase'],
      ['some-words-here', 'someWordsHere'],
      ['single', 'single'],
      ['', ''],
      ['kebab-case-test', 'kebabCaseTest'],
    ])('should convert kebab-case string "%s" to camelCase string "%s"', (input, expected) => {
      const result = kebabCaseToCamelCase(input);
      expect(result).toBe(expected);
    });
  });
});
