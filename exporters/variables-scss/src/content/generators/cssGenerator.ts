import { DimensionToken, StringToken, Token, TokenGroup, TokenType } from '@supernovaio/sdk-exporters';
import { CSSHelper } from '@supernovaio/export-helpers';
import { toPlural } from '../helpers/stringHelper';
import { tokenVariableName } from '../helpers/tokenHelper';
import { handleExceptions } from '../helpers/exceptionHelper';

export const tokenToCSSByType = (
  token: Token,
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
  withParent: boolean,
): string | null => {
  if (token.tokenType === TokenType.dimension) {
    const dimensionToken = token as DimensionToken;
    const name = tokenVariableName(dimensionToken, tokenGroups, withParent);
    let value = dimensionToken.value?.measure;
    value = handleExceptions(name, value);
    const unit = CSSHelper.unitToCSS(dimensionToken.value?.unit);

    return `$${name}: ${value}${unit} !default;`;
  }

  if (token.tokenType === TokenType.string) {
    const stringToken = token as StringToken;
    const name = tokenVariableName(stringToken, tokenGroups, withParent);
    let value = stringToken.value.text;
    value = handleExceptions(name, value);

    return `$${name}: ${value} !default;`;
  }

  return null;
};

export const generateCssFromTokens = (
  tokens: Token[],
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
  hasParentPrefix: boolean,
): string => {
  return tokens
    .map((token) => tokenToCSSByType(token, mappedTokens, tokenGroups, hasParentPrefix))
    .filter(Boolean)
    .join('\n');
};

const generateObjectContent = (tokens: Array<Token>, tokenGroups: Array<TokenGroup>, withParent: boolean): string => {
  return tokens.reduce((result, token) => {
    const name = tokenVariableName(token, tokenGroups, withParent);
    const numericPart = name.match(/\d+/)?.[0];
    const prefix = `${token.origin?.name?.split('/')[0].toLowerCase()}-`;
    const nonNumericPart = name.replace(prefix, '');
    if (numericPart) {
      result += `${numericPart}: $${name},\n`;
    } else if (nonNumericPart) {
      result += `${nonNumericPart}: $${name},\n`;
    }

    return result;
  }, '');
};

export const generateCssObjectFromTokens = (
  tokens: Array<Token>,
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
  hasParentPrefix: boolean,
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

  // For each key in the map, generate an object and add it to the result css
  originNameMap.forEach((token, objectName) => {
    const objectContent = generateObjectContent(token, tokenGroups, hasParentPrefix);
    if (objectContent.trim() !== '') {
      result += `$${objectName}: (\n${objectContent}) !default;\n\n`;
    }
  });

  return result;
};
