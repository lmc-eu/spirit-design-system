import { kebabCaseToCamelCase, kebabCaseToPascalCase } from '../normalizers/names';

export function printTypes(types: Record<string, string[]>, name: string) {
  let result = '';
  const keys: string[] = [];
  Object.entries(types).forEach(([key, value]) => {
    const typeName = kebabCaseToCamelCase(key);
    keys.push(typeName);
    if (value.length > 0) {
      result = `${result}\nexport const ${typeName} = {
${value
  .map((val: string) => `    ${kebabCaseToCamelCase(val)}: ${kebabCaseToCamelCase(key)}${kebabCaseToPascalCase(val)},`)
  .join('\n')}
};\n`;
    }
  });

  if (keys.length > 0) {
    result = `${result}\nexport const ${name} = {
    ${keys.join(',\n    ')},
};\n`;
  }

  return result;
}
