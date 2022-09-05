import { singular } from "../singular";

describe('singular', () => {
  it.each([
    // name, expected
    ['colors', 'color'],
  ])('should singularize name', (name, expected) => {
    expect(singular(name)).toBe(expected);
  })
});
