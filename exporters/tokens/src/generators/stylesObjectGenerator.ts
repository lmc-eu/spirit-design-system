import { Token, TokenGroup, TokenType, TypographyToken } from '@supernovaio/sdk-exporters';
import { formatTypographyName, getBreakpoint, getTokenAlias, normalizeFirstNamePart } from '../helpers/objectHelper';
import { sortTokens, tokenVariableName, typographyValue } from '../helpers/tokenHelper';
import { toCamelCase } from '../helpers/stringHelper';
import { COLOR_JS_SUFFIX, COLOR_KEY, COLOR_SCSS_SUFFIX, TYPOGRAPHY_KEY } from '../constants';

export type StylesObjectType = { [key: string]: (string | object) & { moveToTheEnd?: string } };

export const handleTypographyTokens = (
  tokenNameParts: string[],
  token: Token,
  stylesObjectRef: StylesObjectType,
  hasJsOutput: boolean,
): void => {
  const typographyToken = token as TypographyToken;
  const reducedNameParts = tokenNameParts.slice(0, 2);
  const name = formatTypographyName(tokenNameParts).toLowerCase();
  const breakpoint = getBreakpoint(tokenNameParts).toLowerCase();

  let currentObject = stylesObjectRef;
  reducedNameParts.forEach((part, index) => {
    const tokenName = hasJsOutput ? toCamelCase(name) : `$${name}`;
    const modifiedPart = index === 0 ? tokenName : part;

    if (index === reducedNameParts.length - 1) {
      currentObject[breakpoint] = typographyValue(typographyToken.value, name.includes('italic'), hasJsOutput);
    } else {
      currentObject[modifiedPart] = currentObject[modifiedPart] || {};
      currentObject = currentObject[modifiedPart] as StylesObjectType;
    }
  });
};

export const handleNonTypographyTokens = (
  tokenNameParts: string[],
  token: Token,
  tokenGroups: Array<TokenGroup>,
  hasParentPrefix: boolean,
  stylesObjectRef: StylesObjectType,
  hasJsOutput = false,
): void => {
  let currentObject = stylesObjectRef;

  tokenNameParts.forEach((part, index) => {
    const modifiedPart = index === 0 ? normalizeFirstNamePart(part, token.tokenType, hasJsOutput) : part;

    if (index === tokenNameParts.length - 1) {
      const tokenValue = hasJsOutput
        ? `${toCamelCase(tokenVariableName(token, tokenGroups, hasParentPrefix))}`
        : `$${tokenVariableName(token, tokenGroups, hasParentPrefix)}`;
      const tokenAlias = getTokenAlias(token, hasJsOutput);
      currentObject[tokenAlias] = tokenValue;
    } else {
      currentObject[hasJsOutput ? toCamelCase(modifiedPart) : modifiedPart] = currentObject[modifiedPart] || {};
      currentObject = currentObject[hasJsOutput ? toCamelCase(modifiedPart) : modifiedPart] as StylesObjectType;
    }
  });
};

export const createStylesObjectStructureFromTokenNameParts = (
  token: Token,
  tokenGroups: Array<TokenGroup>,
  hasParentPrefix: boolean,
  stylesObjectRef: StylesObjectType,
  hasJsOutput: boolean,
): StylesObjectType => {
  const { tokenType } = token;
  const tokenNameParts = token.origin?.name?.split('/');

  if (!tokenNameParts || tokenNameParts.length <= 1) {
    return stylesObjectRef;
  }

  if (tokenType === TokenType.typography) {
    handleTypographyTokens(tokenNameParts, token, stylesObjectRef, hasJsOutput);
  } else {
    handleNonTypographyTokens(tokenNameParts, token, tokenGroups, hasParentPrefix, stylesObjectRef, hasJsOutput);
  }

  return stylesObjectRef;
};

export const parseGroupName = (colorVariable: string, hasJsOutput: boolean) => {
  const suffix = hasJsOutput ? COLOR_JS_SUFFIX : COLOR_SCSS_SUFFIX;

  return colorVariable.replace(suffix, '').replace('$', '');
};

export const colorGroupsReducer = (accumulatedColorKeys: { [key: string]: string }, currentColorKey: string) => ({
  ...accumulatedColorKeys,
  [parseGroupName(currentColorKey, false)]: currentColorKey,
});

export const typographyGroupReducer = (
  accumulatedTypographyKeys: { [key: string]: string },
  currentTypographyKey: string,
) => ({
  ...accumulatedTypographyKeys,
  [parseGroupName(currentTypographyKey, false)]: currentTypographyKey,
});

export const createGlobalColorsObject = (colorKeys: Array<string>, hasJsOutput: boolean) => {
  return colorKeys.reduce((accumulatedColorKeys: { [key: string]: string }, currentColorKey: string) => {
    return {
      ...accumulatedColorKeys,
      [parseGroupName(currentColorKey, hasJsOutput)]: currentColorKey,
    };
  }, {});
};

export const createGlobalTypographyObject = (typographyKeys: Array<string>) => {
  return typographyKeys.reduce(typographyGroupReducer, {});
};

// TODO: refactor this function to not use cssObject reference
export const generateStylesObjectFromTokens = (
  tokens: Array<Token>,
  tokenGroups: Array<TokenGroup>,
  hasParentPrefix: boolean,
  hasJsOutput: boolean,
  sortByNumValue: boolean,
): StylesObjectType => {
  const sortedTokens = sortTokens(tokens, tokenGroups, hasParentPrefix, sortByNumValue);
  const stylesObject = sortedTokens.reduce((stylesObjectAccumulator, token) => {
    const currentObject = createStylesObjectStructureFromTokenNameParts(
      token,
      tokenGroups,
      hasParentPrefix,
      stylesObjectAccumulator,
      hasJsOutput,
    );

    return { ...stylesObjectAccumulator, ...currentObject };
  }, {});

  // check if there are any color keys in the object
  const colorKeys = Object.keys(stylesObject).filter((key) => {
    return key.endsWith(hasJsOutput ? COLOR_JS_SUFFIX : COLOR_SCSS_SUFFIX);
  });

  /* if there are color keys, create a separate global object for
  all colors keys and place it at the end of the file */
  if (colorKeys.length > 0) {
    const colorsObject = createGlobalColorsObject(colorKeys, hasJsOutput);
    const key = hasJsOutput ? COLOR_KEY : `$${COLOR_KEY}`;

    return { ...stylesObject, [key]: colorsObject };
  }

  const typographyKeys = Object.keys(stylesObject).filter((key) => key.includes('heading') || key.includes('body'));

  if (typographyKeys.length > 0) {
    const typographyObject = createGlobalTypographyObject(typographyKeys);
    const key = hasJsOutput ? TYPOGRAPHY_KEY : `$${TYPOGRAPHY_KEY}`;

    // Typography has multiple groups, which creates multiple '$styles' objects.
    // After merging the '$styles' objects together, they remain in the middle of the tokens,
    // so we need to move them to the end of the file using the 'moveToTheEnd' flag,
    // which will be removed in the final output.
    return { ...stylesObject, [key]: { ...typographyObject, moveToTheEnd: 'true' } };
  }

  return stylesObject;
};
