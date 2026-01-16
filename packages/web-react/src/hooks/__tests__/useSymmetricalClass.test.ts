import { useSymmetricalClass } from '../useSymmetricalClass';

describe('useSymmetricalClass', () => {
  const componentClass = 'Button';

  describe('when property is undefined', () => {
    it('should return empty string', () => {
      const result = useSymmetricalClass(componentClass, undefined);

      expect(result).toBe('');
    });
  });

  describe('when property is a boolean', () => {
    it('should return symmetrical class when true', () => {
      const result = useSymmetricalClass(componentClass, true);

      expect(result).toBe('Button--symmetrical');
    });

    it('should return empty string when false', () => {
      const result = useSymmetricalClass(componentClass, false);

      expect(result).toBe('');
    });
  });

  describe('when property is an object', () => {
    it('should return symmetrical class for mobile when mobile is true', () => {
      const result = useSymmetricalClass(componentClass, { mobile: true });

      expect(result).toBe('Button--symmetrical');
    });

    it('should return asymmetrical class for mobile when mobile is false', () => {
      const result = useSymmetricalClass(componentClass, { mobile: false });

      expect(result).toBe('Button--asymmetrical');
    });

    it('should return tablet symmetrical class when tablet is true', () => {
      const result = useSymmetricalClass(componentClass, { tablet: true });

      expect(result).toBe('Button--tablet--symmetrical');
    });

    it('should return tablet asymmetrical class when tablet is false', () => {
      const result = useSymmetricalClass(componentClass, { tablet: false });

      expect(result).toBe('Button--tablet--asymmetrical');
    });

    it('should return desktop symmetrical class when desktop is true', () => {
      const result = useSymmetricalClass(componentClass, { desktop: true });

      expect(result).toBe('Button--desktop--symmetrical');
    });

    it('should return desktop asymmetrical class when desktop is false', () => {
      const result = useSymmetricalClass(componentClass, { desktop: false });

      expect(result).toBe('Button--desktop--asymmetrical');
    });

    it('should return combined classes for mobile true and tablet false', () => {
      const result = useSymmetricalClass(componentClass, { mobile: true, tablet: false });

      expect(result).toBe('Button--symmetrical Button--tablet--asymmetrical');
    });

    it('should return combined classes for tablet true and desktop false', () => {
      const result = useSymmetricalClass(componentClass, { tablet: true, desktop: false });

      expect(result).toBe('Button--tablet--symmetrical Button--desktop--asymmetrical');
    });

    it('should return combined classes for mobile true and desktop false', () => {
      const result = useSymmetricalClass(componentClass, { mobile: true, desktop: false });

      expect(result).toBe('Button--symmetrical Button--desktop--asymmetrical');
    });

    it('should return combined classes for all breakpoints', () => {
      const result = useSymmetricalClass(componentClass, { mobile: true, tablet: false, desktop: true });

      expect(result).toBe('Button--symmetrical Button--tablet--asymmetrical Button--desktop--symmetrical');
    });
  });
});
