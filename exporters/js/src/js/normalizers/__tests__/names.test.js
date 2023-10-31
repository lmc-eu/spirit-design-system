import { slugifyName, kebabCaseToPascalCase, kebabCaseToCamelCase } from '../names';

describe('slugifyName', () => {
  it.each([
    ['test', 'test'],
    ['test--test', 'test-test'],
    ['test test', 'test-test'],
    ['test--12--TEST', 'test-test'],
    ['Text Primary', 'text-primary'],
    ['Text/Primary', 'text-primary'],
    ['Text--Primary', 'text-primary'],
    ['Text-01-Primary', 'text-primary'],
  ])('should slugify name correctly', (name, expected) => {
    expect(slugifyName(name)).toBe(expected);
  });
});

describe('kebabCaseToPascalCase', () => {
  it.each([
    ['test', 'Test'],
    ['test-test', 'TestTest'],
    ['text-primary', 'TextPrimary'],
  ])('should convert kebab case to pascal case', (name, expected) => {
    expect(kebabCaseToPascalCase(name)).toBe(expected);
  });
});

describe('kebabCaseToCamelCase', () => {
  it.each([
    ['test', 'test'],
    ['test-test', 'testTest'],
    ['text-primary', 'textPrimary'],
  ])('should convert kebab case to camel case', (name, expected) => {
    expect(kebabCaseToCamelCase(name)).toBe(expected);
  });
});
