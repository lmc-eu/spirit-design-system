import { printTypes } from "../types";

describe('printTypes', () => {
  it.each([
    // types, colors, expected
    [{x: ['arnold'], y: ['rimmer']}, 'judas', `
$x-colors: (
    arnold: $x-arnold,
) !default;

$y-colors: (
    rimmer: $y-rimmer,
) !default;
`],
  ])('should print types', (types, colors, expected) => {
    expect(printTypes(types, colors)).toBe(expected);
  })
});
