import { generateResponsiveClassNames, isResponsive } from '../responsive';

describe('responsive', () => {
  describe('isResponsive', () => {
    it('should return true for responsive object', () => {
      expect(isResponsive({ mobile: 'small' })).toBe(true);
      expect(isResponsive({ tablet: 'medium' })).toBe(true);
      expect(isResponsive({ mobile: 'small', tablet: 'medium' })).toBe(true);
      expect(isResponsive({ mobile: 'small', tablet: 'medium', desktop: 'large' })).toBe(true);
    });

    it('should return false for non-object values', () => {
      expect(isResponsive('small')).toBe(false);
      expect(isResponsive(123)).toBe(false);
      expect(isResponsive(true)).toBe(false);
      expect(isResponsive(null)).toBe(false);
      expect(isResponsive(undefined)).toBe(false);
    });

    it('should return false for arrays', () => {
      expect(isResponsive([])).toBe(false);
      expect(isResponsive(['small', 'medium'])).toBe(false);
    });
  });

  describe('generateResponsiveClassNames', () => {
    it('should return empty array for undefined value', () => {
      expect(generateResponsiveClassNames('ExampleComponent', undefined)).toEqual([]);
    });

    it('should generate class name for single value', () => {
      expect(generateResponsiveClassNames('ExampleComponent', 'small')).toEqual(['ExampleComponent--small']);
      expect(generateResponsiveClassNames('ExampleComponent', 'large')).toEqual(['ExampleComponent--large']);
    });

    it('should generate class name for mobile breakpoint', () => {
      expect(generateResponsiveClassNames('ExampleComponent', { mobile: 'large' })).toEqual([
        'ExampleComponent--large',
      ]);
    });

    it('should generate class names for tablet breakpoint', () => {
      expect(generateResponsiveClassNames('ExampleComponent', { tablet: 'medium' })).toEqual([
        'ExampleComponent--tablet--medium',
      ]);
    });

    it('should generate class names for desktop breakpoint', () => {
      expect(generateResponsiveClassNames('ExampleComponent', { desktop: 'large' })).toEqual([
        'ExampleComponent--desktop--large',
      ]);
    });

    it('should generate class names for multiple breakpoints', () => {
      expect(
        generateResponsiveClassNames('ExampleComponent', { mobile: 'small', tablet: 'medium', desktop: 'large' }),
      ).toEqual(['ExampleComponent--small', 'ExampleComponent--tablet--medium', 'ExampleComponent--desktop--large']);
    });

    it('should filter out undefined breakpoint values', () => {
      expect(
        generateResponsiveClassNames('ExampleComponent', { mobile: 'small', tablet: undefined, desktop: 'large' }),
      ).toEqual(['ExampleComponent--small', 'ExampleComponent--desktop--large']);
    });

    it('should return empty array when all breakpoint values are undefined', () => {
      expect(
        generateResponsiveClassNames('ExampleComponent', { mobile: undefined, tablet: undefined, desktop: undefined }),
      ).toEqual([]);
    });

    it('should handle partial responsive objects', () => {
      expect(generateResponsiveClassNames('ExampleComponent', { mobile: 'small', desktop: 'large' })).toEqual([
        'ExampleComponent--small',
        'ExampleComponent--desktop--large',
      ]);
    });
  });
});
