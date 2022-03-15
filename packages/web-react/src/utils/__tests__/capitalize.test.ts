import { capitalize } from '../capitalize';

describe('#capitalize', () => {
  it.each([
    ['', ''],
    ['text', 'Text'],
  ])('should capitalize text', (input, expected) => {
    expect(capitalize(input)).toBe(expected);
  });
});
