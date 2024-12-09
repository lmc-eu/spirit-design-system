/**
 * Converts a kebab-case string or an object with kebab-case string values to camelCase.
 *
 * @param {string | Record<string, string>} input - The input to be converted. Can be a single string
 * in kebab-case format or an object where the values are kebab-case strings.
 * @returns {string | Record<string, string>} The converted input. If the input is a string,
 * the result is a camelCase string. If the input is an object, the result is a new object
 * with all kebab-case string values converted to camelCase.
 */
export const kebabCaseToCamelCase = (input: string | Record<string, string>): string | Record<string, string> => {
  const transform = (str: string): string => str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

  if (typeof input === 'string') {
    return transform(input);
  }

  if (typeof input === 'object' && input !== null) {
    const result: Record<string, string> = {};
    for (const [key, value] of Object.entries(input)) {
      result[key] = typeof value === 'string' ? transform(value) : value;
    }

    return result;
  }

  return input;
};
