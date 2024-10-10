import { toPlural } from '../stringHelper';

const dataProviderItems = [
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

describe('stringHelper', () => {
  describe.each(dataProviderItems)('toPlural', (name, expected) => {
    it(`should return the expected plural form for ${name}`, () => {
      const result = toPlural(name);

      expect(result).toBe(expected);
    });
  });
});
