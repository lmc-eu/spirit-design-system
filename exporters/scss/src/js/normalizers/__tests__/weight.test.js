import { normalizeWeight } from '../weight';

describe('normalizeWeight', () => {
  it.each([
    // weight, expected
    ['thin', 100],
    ['extralight', 200],
    ['light', 300],
    ['normal', 400],
    ['regular', 400],
    ['medium', 500],
    ['semibold', 600],
    ['bold', 700],
    ['extrabold', 800],
    ['black', 900],
    ['extrablack', 950],
  ])('should normalize weight', (weight, expected) => {
    expect(normalizeWeight(weight, 'Inter')).toBe(expected);
  });

  it('should return 400 for Ebony Semibold', () => {
    expect(normalizeWeight('semibold', 'Ebony')).toBe(400);
  });
});
