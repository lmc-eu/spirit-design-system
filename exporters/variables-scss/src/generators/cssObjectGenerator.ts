import { Token, TokenGroup } from '@supernovaio/sdk-exporters';
import { toPlural } from '../helpers/stringHelper';
import { tokenVariableName } from '../helpers/tokenHelper';

export const generateObjectContent = (
  tokens: Array<Token>,
  tokenGroups: Array<TokenGroup>,
  withParent: boolean,
): string => {
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
): string => {
  const originNameMap = new Map<string, Array<Token>>();
  tokens.forEach((token) => {
    const originName = token.origin?.name;

    if (originName) {
      const nameParts = originName.split('/');
      nameParts.pop();
      const objectName = toPlural(nameParts.join('-').toLowerCase());
      originNameMap.set(objectName, [...(originNameMap.get(objectName) || []), token]);
    }
  });

  return Array.from(originNameMap.entries())
    .map(([objectName, token]) => {
      const objectContent = generateObjectContent(token, tokenGroups, hasParentPrefix);

      return objectContent.trim() && `$${objectName}: (\n${objectContent}) !default;\n\n`;
    })
    .join('');
};
