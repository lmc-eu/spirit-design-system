/**
 * Converts a kebab-case string to camelCase
 *
 * @param str
 */
export const kebabCaseToCamelCase = (str: string): string => str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
