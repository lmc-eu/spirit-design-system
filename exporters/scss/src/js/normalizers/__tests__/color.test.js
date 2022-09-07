import { normalizeColor } from '../color';

describe('normalizeColor', () => {
  it.each([
    // name, expected
    ['123456', '123456'],
  ])('should normalize color', (color, expected) => {
    expect(normalizeColor(color)).toBe(expected);
  });
});
