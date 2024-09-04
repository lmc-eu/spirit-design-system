import { Token, TokenGroup, TokenType } from '@supernovaio/sdk-exporters';
import { tokenVariableName } from '../helpers/tokenHelper';
import { toPlural } from '../helpers/stringHelper';

export const COLOR_SUFFIX = '-colors';

export type CssObjectType = { [key: string]: string | object };

/* This function handles cases that are outside the logic of aliases for the remaining tokens.
A common condition is that for tokens with a numeric part, the non-numeric part is dropped.
Non-numeric tokens are left in their original form. Deviations from this logic are addressed here.
e.g. radius-full -> full */
const invariantTokenAlias: { [key: string]: string } = {
  'radius-full': 'full',
};

export const normalizeFirstNamePart = (part: string, tokenType: TokenType): string => {
  if (tokenType === TokenType.color) {
    return `$${part}${COLOR_SUFFIX}`;
  }

  return `$${toPlural(part.toLowerCase())}`;
};

export const handleInvariantTokenAlias = (tokenName: string): string => {
  if (invariantTokenAlias[tokenName]) {
    return invariantTokenAlias[tokenName];
  }

  return tokenName;
};

export const getTokenAlias = (token: Token): string => {
  let alias;
  const numericPart = token.name.match(/\d+/)?.[0];
  const nonNumericPart = handleInvariantTokenAlias(token.name.toLowerCase());

  if (token.tokenType !== TokenType.color && numericPart) {
    alias = numericPart;
  } else {
    alias = nonNumericPart;
  }

  return alias;
};

export const createObjectStructureFromTokenNameParts = (
  token: Token,
  tokenGroups: Array<TokenGroup>,
  hasParentPrefix: boolean,
  cssObjectRef: CssObjectType,
): CssObjectType => {
  let currentObject: CssObjectType = cssObjectRef;

  const tokenNameParts = token.origin?.name?.split('/');

  if (tokenNameParts) {
    tokenNameParts.forEach((part, index) => {
      let modifiedPart = part;

      // format first part of the name part as object key
      if (index === 0) {
        modifiedPart = normalizeFirstNamePart(part, token.tokenType);
      }
      // format the last part of the name part as token alias and assign token value
      if (index === tokenNameParts.length - 1) {
        const tokenValue = `$${tokenVariableName(token, tokenGroups, hasParentPrefix)}`;
        const tokenAlias = getTokenAlias(token);

        currentObject[tokenAlias] = tokenValue;
      } else {
        // format the rest of the name parts as object keys
        currentObject[modifiedPart] = currentObject[modifiedPart] || {};
        currentObject = currentObject[modifiedPart] as CssObjectType;
      }
    });
  }

  return cssObjectRef;
};

export const parseGroupName = (colorVariable: string) => colorVariable.replace(COLOR_SUFFIX, '').replace('$', '');

export const colorGroupsReducer = (accumulatedColorKeys: { [key: string]: string }, currentColorKey: string) => ({
  ...accumulatedColorKeys,
  [parseGroupName(currentColorKey)]: currentColorKey,
});

export const createGlobalColorsObject = (colorKeys: Array<string>) => colorKeys.reduce(colorGroupsReducer, {});

// TODO: refactor this function to not use cssObject reference
export const generateCssObjectFromTokens = (
  tokens: Array<Token>,
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
  hasParentPrefix: boolean,
): CssObjectType => {
  const cssObject = tokens.reduce((cssObjectAccumulator, token) => {
    const currentObject = createObjectStructureFromTokenNameParts(
      token,
      tokenGroups,
      hasParentPrefix,
      cssObjectAccumulator,
    );

    return { ...cssObjectAccumulator, ...currentObject };
  }, {});

  // check if there are any color keys in the object
  const colorKeys = Object.keys(cssObject).filter((key) => key.endsWith(COLOR_SUFFIX));

  /* if there are color keys, create a separate global object for
  all colors keys and place it at the end of the file */
  if (colorKeys.length > 0) {
    const colorsObject = createGlobalColorsObject(colorKeys);

    return { ...cssObject, $colors: colorsObject };
  }

  return cssObject;
};
