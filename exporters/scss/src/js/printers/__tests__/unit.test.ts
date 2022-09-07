import { printUnit } from '../unit';

describe('printUnit', () => {
  it.each([
    // value, unit, expected
    [123, 'Pixels', '123px'],
    [123, 'rem', '123rem'],
  ])('should print unit', (value, unit, expected) => {
    expect(printUnit(value, unit)).toBe(expected);
  });
});
