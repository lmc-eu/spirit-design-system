import { formatColor } from '../color';

describe('formatColor', () => {
  it.each([
    // name, expected
    [{ a: 125, hex: '123456' }, '#123456'],
  ])('should format color', (color, expected) => {
    expect(formatColor(color)).toBe(expected);
  });
});
