import { CssObjectType } from '../generators/cssObjectGenerator';

export const deepMergeObjects = (obj1: CssObjectType, obj2: CssObjectType): CssObjectType => {
  // First, perform the deep merge logic
  const mergedObject = Object.entries(obj2).reduce(
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

  // Now, process the object to move keys with "moveToTheEnd": true to the end
  const finalObject: CssObjectType = {};
  const endObject: CssObjectType = {};

  Object.entries(mergedObject).forEach(([key, value]) => {
    if (typeof value === 'object' && value !== null && value.moveToTheEnd === 'true') {
      // Move this entry to endObject
      delete value.moveToTheEnd; // Exclude "moveToTheEnd" flag
      endObject[key] = value;
    } else {
      // Keep it in the main object
      finalObject[key] = value;
    }
  });

  // Return finalObject with endObject entries moved to the end
  return { ...finalObject, ...endObject };
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

export const convertToJsToken = (obj: CssObjectType): string => {
  return Object.entries(obj)
    .map(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        const nestedScss = convertToJsToken(value as CssObjectType);

        return `${key}: {\n${nestedScss}\n},\n`;
      }

      return `${key}: ${value},\n`;
    })
    .join('')
    .slice(0, -1);
};

export const formatTypographyName = (tokenNameParts: string[]): string => {
  return tokenNameParts.length === 4
    ? tokenNameParts.filter((_, index) => index !== 1).join('-')
    : tokenNameParts.join('-');
};

export const getBreakpoint = (tokenNameParts: string[]): string => {
  return tokenNameParts.length === 4 ? tokenNameParts[1] : 'mobile';
};
