import { DimensionToken, StringToken, Token, TokenGroup, TokenType } from '@supernovaio/sdk-exporters';
import { CSSHelper, NamingHelper, StringCase } from '@supernovaio/export-helpers';
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

export const tokenToCSSByType = (
  token: Token,
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
  withParent: boolean,
): string | null => {
  if (token.tokenType === TokenType.dimension) {
    const dimensionToken = token as DimensionToken;
    const name = tokenVariableName(dimensionToken, tokenGroups, withParent);
    const value = dimensionToken.value?.measure;
    const unit = CSSHelper.unitToCSS(dimensionToken.value?.unit);

    return `$${name}: ${value}${unit} !default;`;
  }

  if (token.tokenType === TokenType.string) {
    const stringToken = token as StringToken;
    const name = tokenVariableName(stringToken, tokenGroups, withParent);
    const value = stringToken.value.text;

    return `$${name}: ${value} !default;`;
  }

  return null;
};

export const generateCssFromTokens = (
  tokens: Token[],
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
  withParent: boolean,
): string => {
  return tokens
    .map((token) => tokenToCSSByType(token, mappedTokens, tokenGroups, withParent))
    .filter(Boolean)
    .join('\n');
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

export const generateCssObjectFromTokens = (
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
