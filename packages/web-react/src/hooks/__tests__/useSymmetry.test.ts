import { useSymmetry } from '../useSymmetry';

describe('useSymmetry', () => {
  const componentClass = 'Button';

  describe('when property is undefined', () => {
    it('should return isSymmetricalActive false and empty className', () => {
      const result = useSymmetry(componentClass, undefined);

      expect(result.isSymmetricalActive).toBeFalsy();
      expect(result.symmetricalClassName).toBe('');
    });
  });

  describe('when property is a boolean', () => {
    it('should return isSymmetricalActive true and symmetrical class when true', () => {
      const result = useSymmetry(componentClass, true);

      expect(result.isSymmetricalActive).toBeTruthy();
      expect(result.symmetricalClassName).toBe('Button--symmetrical');
    });

    it('should return isSymmetricalActive false and empty className when false', () => {
      const result = useSymmetry(componentClass, false);

      expect(result.isSymmetricalActive).toBeFalsy();
      expect(result.symmetricalClassName).toBe('');
    });
  });

  describe('when property is an object', () => {
    it('should return isSymmetricalActive true when at least one breakpoint is true', () => {
      const result = useSymmetry(componentClass, { mobile: true, tablet: false });

      expect(result.isSymmetricalActive).toBeTruthy();
      expect(result.symmetricalClassName).toBe('Button--symmetrical Button--tablet--asymmetrical');
    });

    it('should return isSymmetricalActive false and no classes when all breakpoints are false', () => {
      const result = useSymmetry(componentClass, { mobile: false, tablet: false });

      expect(result.isSymmetricalActive).toBeFalsy();
      expect(result.symmetricalClassName).toBe('');
    });

    it.each([
      [{ mobile: true }, 'Button--symmetrical'],
      [{ mobile: false }, ''],
      [{ tablet: true }, 'Button--tablet--symmetrical'],
      [{ tablet: false }, ''],
      [{ desktop: true }, 'Button--desktop--symmetrical'],
      [{ desktop: false }, ''],
    ])('should return correct class for single breakpoint %s', (isSymmetrical, expectedClassName) => {
      const result = useSymmetry(componentClass, isSymmetrical);

      expect(result.symmetricalClassName).toBe(expectedClassName);
    });

    it.each([
      [{ mobile: false }, false],
      [{ tablet: false }, false],
      [{ desktop: false }, false],
    ])('should return isSymmetricalActive false when only breakpoint is false %s', (isSymmetrical, expectedActive) => {
      const result = useSymmetry(componentClass, isSymmetrical);

      expect(result.isSymmetricalActive).toBe(expectedActive);
    });

    it.each([
      [{ mobile: true, tablet: false }, 'Button--symmetrical Button--tablet--asymmetrical'],
      [{ tablet: true, desktop: false }, 'Button--tablet--symmetrical Button--desktop--asymmetrical'],
      [{ mobile: true, desktop: false }, 'Button--symmetrical Button--desktop--asymmetrical'],
      [
        { mobile: true, tablet: false, desktop: true },
        'Button--symmetrical Button--tablet--asymmetrical Button--desktop--symmetrical',
      ],
    ])('should return combined classes for %s', (isSymmetrical, expectedClassName) => {
      const result = useSymmetry(componentClass, isSymmetrical);

      expect(result.symmetricalClassName).toBe(expectedClassName);
    });
  });
});
