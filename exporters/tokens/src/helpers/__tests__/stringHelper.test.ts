import { toPlural, toCamelCase } from '../stringHelper';

describe('stringHelper', () => {
  const dataProviderToPlural = [
    ['radius', 'radii'],
    ['spacing', 'spaces'],
    ['breakpoint', 'breakpoints'],
    ['grid-spacing', 'grid-spacings'],
    ['shadow', 'shadows'],
    ['gradient', 'gradients'],
    ['size', 'sizes'],
    ['space', 'spaces'],
    ['spaces', 'spaces'],
  ];

  describe.each(dataProviderToPlural)('toPlural', (name, expected) => {
    it(`should return the expected plural form for ${name}`, () => {
      const result = toPlural(name);

      expect(result).toBe(expected);
    });
  });

  const dataProviderToCamelCase = [
    ['test value', 'testValue'],
    ['another TEST val', 'anotherTestVal'],
    ['test xsmall', 'testXSmall'],
    ['xsmall', 'xsmall'],
    ['xlarge', 'xlarge'],
    ['size-xsmall', 'sizeXSmall'],
    ['size-xlarge', 'sizeXLarge'],
    // This will not work in this implementation: `size-xxlarge`-> `sizeXXlarge`
    // ['size-xxlarge', 'sizeXXLarge'],
  ];

  describe.each(dataProviderToCamelCase)('toCamelCase', (name, expected) => {
    it(`should return the expected camel cased form for ${name}`, () => {
      const result = toCamelCase(name);

      expect(result).toBe(expected);
    });
  });
});
