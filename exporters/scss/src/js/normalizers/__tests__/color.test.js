import { normalizeColor } from '../color';

describe('normalizeColor', () => {
  it.each([
    // name, expected
    ['123456', '#123456'],
    ['123', '#123'],
    ['fff', '#fff'],
    ['ffffff', '#fff'],
    ['ffffff00', '#fff0'],
    ['ffffffff', '#fff'],
    ['fffffff0', '#fffffff0'],
  ])('should normalize color', (color, expected) => {
    expect(normalizeColor(color)).toBe(expected);
  });
});
