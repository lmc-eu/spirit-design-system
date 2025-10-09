import { isEmpty, isEmptyArray, isEmptyObject, isEmptyString, isEnumerable, isNullish } from '../assert';

describe('assert', () => {
  describe('isNullish', () => {
    it.each([
      [null, true],
      [undefined, true],
      ['', false],
      [0, false],
      [false, false],
      [{}, false],
    ])('should return %s for value %p', (value, expected) => {
      expect(isNullish(value)).toBe(expected);
    });
  });

  describe('isEmptyString', () => {
    it.each([
      ['', true],
      ['   ', true],
      ['hello', false],
      [' ', true],
    ])('should return %s for value %p', (value, expected) => {
      expect(isEmptyString(value)).toBe(expected);
    });
  });

  describe('isEmptyArray', () => {
    it.each([
      [[], true],
      [[1, 2, 3], false],
    ])('should return %s for value %p', (value, expected) => {
      expect(isEmptyArray(value)).toBe(expected);
    });
  });

  describe('isEmptyObject', () => {
    it.each([
      [{}, true],
      [{ key: 'value' }, false],
    ])('should return %s for value %p', (value, expected) => {
      expect(isEmptyObject(value)).toBe(expected);
    });
  });

  describe('isEnumerable', () => {
    it.each([
      [{ key: 'value' }, true],
      [{}, false],
      [null, false],
      [undefined, false],
    ])('should return %s for value %p', (value, expected) => {
      expect(isEnumerable(value)).toBe(expected);
    });
  });

  describe('isEmpty', () => {
    it.each([
      [null, true],
      [undefined, true],
      ['', true],
      ['   ', true],
      [[], true],
      [{}, true],
      ['hello', false],
      [1, false],
      [true, false],
      [false, false],
      [[1, 2, 3], false],
      [{ key: 'value' }, false],
    ])('should return %s for value %p', (value, expected) => {
      expect(isEmpty(value)).toBe(expected);
    });
  });
});
