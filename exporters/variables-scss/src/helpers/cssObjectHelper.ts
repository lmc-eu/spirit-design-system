import { CssObjectType } from '../generators/cssObjectGenerator';

export const deepMergeObjects = (obj1: CssObjectType, obj2: CssObjectType): CssObjectType => {
  return Object.entries(obj2).reduce(
    (result, [key, value]) => {
      if (typeof value === 'object' && value !== null && typeof result[key] === 'object') {
        result[key] = deepMergeObjects(result[key] as CssObjectType, value as CssObjectType);
      } else {
        result[key] = value;
      }

      return result;
    },
    { ...obj1 },
  );
};

export function convertToScss(obj: CssObjectType): string {
  return Object.entries(obj)
    .map(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        const nestedScss = convertToScss(value as CssObjectType);

        return `${key}: (\n${nestedScss}\n),\n`;
      }

      return `${key}: ${value},\n`;
    })
    .join('')
    .slice(0, -1);
}
