import { canHexBeShortened, normalizeColor, shortHex } from '../colorHelper';

const dataProviderItems = [
  {
    originalColor: 'ffffffff',
    expectedColor: '#fff',
  },
  {
    originalColor: '96969',
    expectedColor: '#96969',
  },
  {
    originalColor: '835ea1',
    expectedColor: '#835ea1',
  },
  {
    originalColor: '00000040',
    expectedColor: '#00000040',
  },
];

describe('colorHelper', () => {
  describe.each(dataProviderItems)('normalizeColor', ({ originalColor, expectedColor }) => {
    it('should normalize color', () => {
      expect(normalizeColor(originalColor)).toBe(expectedColor);
    });
  });

  describe('canHexBeShortened', () => {
    it('should return true if hex can be shortened', () => {
      expect(canHexBeShortened('ffffff')).toBe(true);
    });

    it('should return false if hex cannot be shortened', () => {
      expect(canHexBeShortened('00000040')).toBe(false);
    });
  });

  describe('shortHex', () => {
    it('should shorten hex', () => {
      expect(shortHex('ffffff')).toBe('fff');
    });
  });
});
