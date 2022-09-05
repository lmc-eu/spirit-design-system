import { plural } from '../normalizers/plural';

/**
 * @param {object} types
 * @param {string} colors
 * @returns {string}
 */
export function printTypes(types, colors) {
  let result = '';
  Object.entries(types).forEach(([key, value]) => {
    result = `${result}\n$${colors ? `${key}-colors` : plural(key)}: (
${value.map((val) => `    ${val}: $${key}-${val},`).join('\n')}
) !default;\n`;
  });

  return result;
}
