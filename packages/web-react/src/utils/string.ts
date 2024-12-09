/**
 * Converts a kebab-case string to camelCase.
 *
 * @param {string} str - The kebab-case string to be converted.
 * @returns {string} The camelCase version of the input string.
 */
export const kebabCaseToCamelCase = (str: string): string => str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

/**
 * Converts an object with kebab-case string values to camelCase.
 *
 * @param {Record<string, string>} input - The input to be converted.
 * @returns {Record<string, string>} The converted input.
 */
export const kebabCaseToCamelCaseValues = (input: Record<string, string>): Record<string, string> => {
  if (typeof input === 'object' && input !== null) {
    const result: Record<string, string> = {};
    for (const [key, value] of Object.entries(input)) {
      result[key] = typeof value === 'string' ? kebabCaseToCamelCase(value) : value;
    }

    return result;
  }

  return input;
};

/**
 * Converts a kebab-case string or an object with kebab-case values to camelCase.
 *
 * @param {string | Record<string, string>} input - The input to be converted.
 * @returns {string | Record<string, string>} The converted input.
 */
export const stringOrObjectKebabCaseToCamelCase = (
  input: string | Record<string, string>,
): string | Record<string, string> => {
  if (typeof input === 'string') {
    return kebabCaseToCamelCase(input);
  }
  if (typeof input === 'object' && input !== null) {
    return kebabCaseToCamelCaseValues(input);
  }

  return input;
};
