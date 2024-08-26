import { DimensionToken, Token, TokenGroup } from '@supernovaio/sdk-exporters';
import { NamingHelper, StringCase } from '@supernovaio/export-helpers';
import { toPlural } from '../helpers/stringHelper';

export const tokenVariableName = (token: Token, tokenGroups: Array<TokenGroup>, withParent: boolean): string => {
  let parent;
  if (withParent) {
    parent = tokenGroups.find((group) => group.id === token.parentGroupId)!;
  } else {
    parent = null;
  }

  return NamingHelper.codeSafeVariableNameForToken(token, StringCase.paramCase, parent, '');
};

const generateObjectContent = (tokens: Array<Token>, tokenGroups: Array<TokenGroup>, withParent: boolean): string => {
  let result = '';

  tokens.forEach((token) => {
    const dimensionToken = token as DimensionToken;
    const name = tokenVariableName(dimensionToken, tokenGroups, withParent);
    const numericPart = name.match(/\d+/)?.[0];
    const prefix = `${token.origin?.name?.split('/')[0].toLowerCase()}-`; // Use template literal
    const nonNumericPart = name.replace(prefix, '');
    if (numericPart) {
      result += `${numericPart}: $${name},\n`;
    } else if (nonNumericPart) {
      result += `${nonNumericPart}: $${name},\n`;
    }
  });

  return result;
};

export const generateCssObject = (
  tokens: Array<Token>,
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
  withParent: boolean,
): string | null => {
  // Create a map where the key is the origin name and the value is an array of tokens
  const originNameMap = new Map<string, Array<Token>>();
  tokens.forEach((token) => {
    const originName = token.origin?.name;
    if (originName) {
      const nameParts = originName.split('/');
      nameParts.pop();
      const objectName = toPlural(nameParts.join('-').toLowerCase());
      const tokenArray = originNameMap.get(objectName) || [];
      tokenArray.push(token);
      originNameMap.set(objectName, tokenArray);
    }
  });

  let result = '';
  // For each key in the map, generate an object and add it to the result string
  originNameMap.forEach((token, objectName) => {
    const objectContent = generateObjectContent(token, tokenGroups, withParent);
    if (objectContent.trim() !== '') {
      result += `$${objectName}: (\n${objectContent}) !default;\n\n`;
    }
  });

  return result;
};
