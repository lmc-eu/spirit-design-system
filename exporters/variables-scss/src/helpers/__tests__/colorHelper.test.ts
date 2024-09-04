import { canHexBeShortened, normalizeColor, removeAlphaChannel, shortenHex } from '../colorHelper';

const dataProviderItems = [
  ['ffffffff', '#fff'],
  ['123456', '#123456'],
  ['123', '#123'],
  ['fff', '#fff'],
  ['ffffff', '#fff'],
  ['ffffff00', '#fff0'],
  ['fffffff0', '#fffffff0'],
  ['96969', '#96969'],
  ['835ea1', '#835ea1'],
  ['00000040', '#00000040'],
];

describe('colorHelper', () => {
  describe.each(dataProviderItems)('normalizeColor', (originalColor, expectedColor) => {
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
      expect(shortenHex('ffffff')).toBe('fff');
    });
  });

  describe('removeAlphaChannel', () => {
    it('should not remove alpha channel', () => {
      expect(removeAlphaChannel('ffffff40')).toBe('ffffff40');
    });

    it('should remove alpha channel in short form', () => {
      expect(removeAlphaChannel('fff')).toBe('fff');
    });
  });
});
