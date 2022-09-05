import { plural } from "../plural";

describe('plural', () => {
  it.each([
    // name, expected
    ['color', 'colors'],
  ])('should pluralize name', (name, expected) => {
    expect(plural(name)).toBe(expected);
  })
});
