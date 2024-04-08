import { normalizeColor } from '../color';

describe('normalizeColor', () => {
  it.each([
    // name, expected
    ['123456', '123456'],
    ['fff', 'fff'],
    ['ffffff', 'fff'],
    ['ffffff00', 'fff0'],
  ])('should normalize color', (color, expected) => {
    expect(normalizeColor(color)).toBe(expected);
  });
});
