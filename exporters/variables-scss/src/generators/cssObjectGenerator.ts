import { Token, TokenGroup, TokenType } from '@supernovaio/sdk-exporters';
import { tokenVariableName } from '../helpers/tokenHelper';
import { toPlural } from '../helpers/stringHelper';

export type CssObjectType = { [key: string]: string | object };

// TODO : add comments to this function
// Handle invariant token aliases eg radius-full -> full
const invariantTokenAlias: { [key: string]: string } = {
  'radius-full': 'full',
};

export const getNonNumericPart = (tokenName: string): string => {
  if (invariantTokenAlias[tokenName]) {
    return invariantTokenAlias[tokenName];
  }

  return tokenName.toLowerCase();
};

export const generateCssObjectFromTokens = (
  tokens: Array<Token>,
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
  hasParentPrefix: boolean,
): CssObjectType => {
  // TODO: rename cssObject to cssObjectAcumulator
  return tokens.reduce((cssObject, token) => {
    const nameParts = token.origin?.name?.split('/');

    if (nameParts) {
      let currentObject: CssObjectType = cssObject;

      nameParts.forEach((part, index) => {
        if (index === 0) {
          part = token.tokenType === TokenType.color ? `$${part}-colors` : `$${toPlural(part.toLowerCase())}`;
        }
        if (index === nameParts.length - 1) {
          const value = tokenVariableName(token, tokenGroups, hasParentPrefix);
          let result;
          const numericPart = token.name.match(/\d+/)?.[0];
          const nonNumericPart = getNonNumericPart(token.name);

          if (token.tokenType !== TokenType.color && numericPart) {
            result = numericPart;
          } else {
            result = nonNumericPart;
          }
          currentObject[result] = `$${value}`;
        } else {
          currentObject[part] = currentObject[part] || {};
          currentObject = currentObject[part] as CssObjectType;
        }
      });
    }

    return cssObject;
  }, {});
};
