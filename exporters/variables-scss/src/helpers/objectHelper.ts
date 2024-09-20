import { Token, TokenType } from '@supernovaio/sdk-exporters';
import { COLOR_SUFFIX, StylesObjectType } from '../generators/stylesObjectGenerator';
import { toCamelCase, toPlural } from './stringHelper';
import { handleInvariantTokenAlias } from './specialCaseHelper';

export const deepMergeObjects = (obj1: StylesObjectType, obj2: StylesObjectType): StylesObjectType => {
  // First, perform the deep merge logic
  const mergedObject = Object.entries(obj2).reduce(
    (result, [key, value]) => {
      if (typeof value === 'object' && value !== null && typeof result[key] === 'object') {
        result[key] = deepMergeObjects(result[key] as StylesObjectType, value as StylesObjectType);
      } else {
        result[key] = value;
      }

      return result;
    },
    { ...obj1 },
  );

  // Now, process the object to move keys with "moveToTheEnd": true to the end
  const finalObject: StylesObjectType = {};
  const endObject: StylesObjectType = {};

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

export function convertToScss(obj: StylesObjectType): string {
  return Object.entries(obj)
    .map(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        const nestedScss = convertToScss(value as StylesObjectType);

        return `${key}: (\n${nestedScss}\n),\n`;
      }

      return `${key}: ${value},\n`;
    })
    .join('')
    .slice(0, -1);
}

export const convertToJs = (obj: StylesObjectType): string => {
  return Object.entries(obj)
    .map(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        const nestedScss = convertToJs(value as StylesObjectType);

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

export const getTokenAlias = (token: Token, hasJsOutput: boolean): string => {
  let alias;
  const numericPart = token.name.match(/\d+/)?.[0];
  const nonNumericPart = handleInvariantTokenAlias(token.name.toLowerCase());

  if (token.tokenType !== TokenType.color && numericPart) {
    alias = numericPart;
  } else {
    alias = hasJsOutput ? toCamelCase(nonNumericPart) : nonNumericPart;
  }

  return alias;
};

export const normalizeFirstNamePart = (part: string, tokenType: TokenType, hasJsOutput: boolean): string => {
  if (tokenType === TokenType.color) {
    const partNameWithColorSuffix = `${part.toLowerCase()}${COLOR_SUFFIX}`;

    return hasJsOutput ? toCamelCase(partNameWithColorSuffix) : `$${partNameWithColorSuffix}`;
  }

  return hasJsOutput ? toPlural(part.toLowerCase()) : `$${toPlural(part.toLowerCase())}`;
};
