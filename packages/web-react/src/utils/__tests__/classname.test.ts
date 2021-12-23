import { applyClassNamePrefix, applyColor, applyTheme } from '../classname';

describe('classname', () => {
  describe('#applyColor', () => {
    it('should apply color on given class name', () => {
      const appliedColor = applyColor('red');

      expect(appliedColor('classname')).toBe('classname--red');
    });
  });

  describe('#applyTheme', () => {
    it('should apply theme on given class name', () => {
      const appliedTheme = applyTheme('dark');

      expect(appliedTheme('classname')).toBe('classname-dark');
    });
  });

  describe('#applyClassNamePrefix', () => {
    it.each([
      ['lmc', 'lmc-classname'],
      ['', 'classname'],
      [undefined, 'classname'],
      [null, 'classname'],
    ])(
      'should apply prefix %s on given class name with result: %s',
      (value: string | null | undefined, expected: string) => {
        const appliedClassNamePrefix = applyClassNamePrefix(value);

        expect(appliedClassNamePrefix('classname')).toBe(expected);
      },
    );
  });
});
