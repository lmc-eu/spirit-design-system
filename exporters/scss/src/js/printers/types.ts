import { plural } from '../normalizers/plural';

export function printTypes(types: Record<string, string[]>, colors: string) {
  let result = '';
  Object.entries(types).forEach(([key, value]) => {
    result = `${result}\n$${colors ? `${key}-colors` : plural(key)}: (
${value.map((val: string) => `    ${val}: $${key}-${val},`).join('\n')}
) !default;\n`;
  });

  return result;
}
