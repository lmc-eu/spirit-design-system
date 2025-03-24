/**
 * Check if the value is `null` or `undefined`.
 *
 * @param {unknown} value - The value to check.
 * @returns {boolean} - `true` if the value is `null` or `undefined`, `false` otherwise.
 */
export const isNullish = (value: unknown): value is null | undefined => value == null;

/**
 * Check if the value is an empty string.
 *
 * @param {unknown} value - The value to check.
 * @returns {boolean} - `true` if the value is an empty string, `false` otherwise.
 */
export const isEmptyString = (value: unknown): boolean => typeof value === 'string' && value.trim() === '';

/**
 * Check if the value is an empty array.
 *
 * @param {unknown} value - The value to check.
 * @returns {boolean} - `true` if the value is an empty array, `false` otherwise.
 */
export const isEmptyArray = (value: unknown): boolean => Array.isArray(value) && value.length === 0;

/**
 * Check if the value is an empty object.
 *
 * @param {unknown} value - The value to check.
 * @returns {boolean} - `true` if the value is an empty object, `false` otherwise.
 */
export const isEmptyObject = (value: unknown): boolean =>
  typeof value === 'object' && value !== null && Object.keys(value).length === 0;

/**
 * Check if the value is an object with at least one own enumerable property.
 *
 * @param {unknown} value - The value to check.
 * @returns {boolean} - `true` if the object has own enumerable properties, `false` otherwise.
 */
export const isEnumerable = (value: unknown): boolean => {
  if (typeof value === 'object' && value !== null) {
    for (const key in value) {
      if (Object.hasOwnProperty.call(value, key)) {
        return true;
      }
    }
  }

  return false;
};

/**
 * Check if the value is empty.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 * Arrays are considered empty if they have a length of 0.
 * Strings are considered empty if they are empty or contain only whitespace.
 * Nullish values are considered empty.
 *
 * @param {unknown} value - The value to check.
 * @returns {boolean} - `true` if the value is empty, `false` otherwise.
 * @example
 * ```js
 * isEmpty(null); // => true
 * isEmpty(undefined); // => true
 * isEmpty(''); // => true
 * isEmpty([]); // => true
 * isEmpty({}); // => true
 * isEmpty('hello'); // => false
 * isEmpty(1); // => false
 * isEmpty(true); // => false
 * isEmpty(false); // => false
 * isEmpty([1, 2, 3]); // => false
 * isEmpty({ key: 'value' }); // => false
 * ```
 */
export const isEmpty = (value: unknown): boolean => {
  if (isNullish(value)) {
    return true;
  }

  if (isEmptyString(value)) {
    return true;
  }

  if (isEmptyArray(value)) {
    return true;
  }

  if (isEmptyObject(value)) {
    return true;
  }

  if (isEnumerable(value)) {
    return false;
  }

  return false;
};
