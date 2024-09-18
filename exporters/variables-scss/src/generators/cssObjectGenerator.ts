import { Token, TokenGroup, TokenType, TypographyToken } from '@supernovaio/sdk-exporters';
import { formatTypographyName, getBreakpoint } from '../helpers/cssObjectHelper';
import { tokenVariableName, typographyValue } from '../helpers/tokenHelper';
import { toPlural } from '../helpers/stringHelper';

export const COLOR_SUFFIX = '-colors';

export type CssObjectType = { [key: string]: (string | object) & { moveToTheEnd?: string } };

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

const handleTypographyTokens = (tokenNameParts: string[], token: Token, cssObjectRef: CssObjectType): void => {
  const typographyToken = token as TypographyToken;
  const reducedNameParts = tokenNameParts.slice(0, 2);
  const name = formatTypographyName(tokenNameParts).toLowerCase();
  const breakpoint = getBreakpoint(tokenNameParts).toLowerCase();

  let currentObject = cssObjectRef;
  reducedNameParts.forEach((part, index) => {
    const modifiedPart = index === 0 ? `$${name}` : part;

    if (index === reducedNameParts.length - 1) {
      currentObject[breakpoint] = typographyValue(typographyToken.value, name.includes('italic'));
    } else {
      currentObject[modifiedPart] = currentObject[modifiedPart] || {};
      currentObject = currentObject[modifiedPart] as CssObjectType;
    }
  });
};

const handleNonTypographyTokens = (
  tokenNameParts: string[],
  token: Token,
  tokenGroups: Array<TokenGroup>,
  hasParentPrefix: boolean,
  cssObjectRef: CssObjectType,
): void => {
  let currentObject = cssObjectRef;

  tokenNameParts.forEach((part, index) => {
    const modifiedPart = index === 0 ? normalizeFirstNamePart(part, token.tokenType) : part;

    if (index === tokenNameParts.length - 1) {
      const tokenValue = `$${tokenVariableName(token, tokenGroups, hasParentPrefix)}`;
      const tokenAlias = getTokenAlias(token);
      currentObject[tokenAlias] = tokenValue;
    } else {
      currentObject[modifiedPart] = currentObject[modifiedPart] || {};
      currentObject = currentObject[modifiedPart] as CssObjectType;
    }
  });
};

export const createObjectStructureFromTokenNameParts = (
  token: Token,
  tokenGroups: Array<TokenGroup>,
  hasParentPrefix: boolean,
  cssObjectRef: CssObjectType,
): CssObjectType => {
  const { tokenType } = token;
  const tokenNameParts = token.origin?.name?.split('/');

  if (!tokenNameParts) {
    return cssObjectRef;
  }

  if (tokenType === TokenType.typography) {
    handleTypographyTokens(tokenNameParts, token, cssObjectRef);
  } else {
    handleNonTypographyTokens(tokenNameParts, token, tokenGroups, hasParentPrefix, cssObjectRef);
  }

  return cssObjectRef;
};

export const parseGroupName = (colorVariable: string) => colorVariable.replace(COLOR_SUFFIX, '').replace('$', '');

export const colorGroupsReducer = (accumulatedColorKeys: { [key: string]: string }, currentColorKey: string) => ({
  ...accumulatedColorKeys,
  [parseGroupName(currentColorKey)]: currentColorKey,
});

export const typographyGroupReducer = (
  accumulatedTypographyKeys: { [key: string]: string },
  currentTypographyKey: string,
) => ({
  ...accumulatedTypographyKeys,
  [parseGroupName(currentTypographyKey)]: currentTypographyKey,
});

export const createGlobalColorsObject = (colorKeys: Array<string>) => colorKeys.reduce(colorGroupsReducer, {});

export const createGlobalTypographyObject = (typographyKeys: Array<string>) => {
  return typographyKeys.reduce(typographyGroupReducer, {});
};

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

  const typographyKeys = Object.keys(cssObject).filter((key) => key.includes('heading') || key.includes('body'));

  if (typographyKeys.length > 0) {
    const typographyObject = createGlobalTypographyObject(typographyKeys);

    // Typography has multiple groups, which creates multiple '$styles' objects.
    // After merging the '$styles' objects together, they remain in the middle of the tokens,
    // so we need to move them to the end of the file using the 'moveToTheEnd' flag,
    // which will be removed in the final output.
    return { ...cssObject, $styles: { ...typographyObject, moveToTheEnd: 'true' } };
  }

  return cssObject;
};
