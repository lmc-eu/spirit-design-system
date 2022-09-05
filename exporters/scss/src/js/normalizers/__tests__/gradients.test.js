import { normalizeGradientAngle } from "../gradients";

describe('normalizeGradientAngle', () => {
  it.each([
    // from, to, expected
    [{x: 0, y: 100}, {x: 100, y: 0}, 45],
  ])('should narmalize gradient angle', (from, to, expected) => {
    expect(normalizeGradientAngle(from, to)).toBe(expected);
  })
});
