import {
  BorderToken,
  BorderWidthToken,
  ColorToken,
  DimensionToken,
  FontSizeToken,
  GradientToken,
  LetterSpacingToken,
  LineHeightToken,
  RadiusToken,
  ShadowToken,
  SizeToken,
  SpaceToken,
  StringToken,
  Token,
  TokenGroup,
  TokenType,
} from '@supernovaio/sdk-exporters';
import { ColorFormat, CSSHelper } from '@supernovaio/export-helpers';
import {
  addAngleVarToGradient,
  addEmptyLineBetweenTokenGroups,
  formatTokenStyleByOutput,
  sortTokens,
  tokenVariableName,
} from '../helpers/tokenHelper';
import { handleSpecialCase } from '../helpers/specialCaseHelper';
import {
  normalizeColor,
  findAllHexColorsInStringAndNormalize,
  transformColorsToVariables,
} from '../helpers/colorHelper';
import { replacePxWithRemUnits } from '../helpers/unitHelper';

export const tokenToStyleByType = (
  token: Token,
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
  tokenPrefix: string,
  hasMixin: boolean,
  hasParentPrefix: boolean,
  hasJsOutput: boolean,
): string | null => {
  const hasTokenType = (type: TokenType) => {
    const { tokenType } = token;

    return tokenType === type;
  };

  if (hasTokenType(TokenType.dimension)) {
    const dimensionToken = token as DimensionToken;
    const name = tokenVariableName(dimensionToken, tokenGroups, hasParentPrefix);
    let value = dimensionToken.value?.measure;
    value = handleSpecialCase(name, value);
    const unit = CSSHelper.unitToCSS(dimensionToken.value?.unit);

    return formatTokenStyleByOutput(name, value, hasJsOutput, unit, true);
  }

  if (hasTokenType(TokenType.radius)) {
    const radiusToken = token as RadiusToken;
    const name = tokenVariableName(radiusToken, tokenGroups, hasParentPrefix);
    let value = radiusToken.value?.measure;
    value = handleSpecialCase(name, value);
    const unit = CSSHelper.unitToCSS(radiusToken.value?.unit);

    return formatTokenStyleByOutput(name, value, hasJsOutput, unit, true);
  }

  if (hasTokenType(TokenType.space)) {
    const spaceToken = token as SpaceToken;
    const name = tokenVariableName(spaceToken, tokenGroups, hasParentPrefix);
    let value = spaceToken.value?.measure;
    value = handleSpecialCase(name, value);
    const unit = CSSHelper.unitToCSS(spaceToken.value?.unit);

    return formatTokenStyleByOutput(name, value, hasJsOutput, unit, true);
  }

  if (hasTokenType(TokenType.border)) {
    const borderToken = token as BorderToken;
    const name = tokenVariableName(borderToken, tokenGroups, hasParentPrefix);
    let value = borderToken.value?.width?.measure;
    value = handleSpecialCase(name, value);
    const unit = CSSHelper.unitToCSS(borderToken.value?.width?.unit);

    return formatTokenStyleByOutput(name, value, hasJsOutput, unit);
  }

  if (hasTokenType(TokenType.borderWidth)) {
    const borderWidthToken = token as BorderWidthToken;
    const name = tokenVariableName(borderWidthToken, tokenGroups, hasParentPrefix);
    let value = borderWidthToken.value?.measure;
    value = handleSpecialCase(name, value);
    const unit = CSSHelper.unitToCSS(borderWidthToken.value?.unit);

    return formatTokenStyleByOutput(name, value, hasJsOutput, unit);
  }

  if (hasTokenType(TokenType.size)) {
    const sizeToken = token as SizeToken;
    const name = tokenVariableName(sizeToken, tokenGroups, hasParentPrefix);
    let value = sizeToken.value?.measure;
    value = handleSpecialCase(name, value);
    const unit = CSSHelper.unitToCSS(sizeToken.value?.unit);

    return formatTokenStyleByOutput(name, value, hasJsOutput, unit);
  }

  if (hasTokenType(TokenType.fontSize)) {
    const fontSizeToken = token as FontSizeToken;
    const name = tokenVariableName(fontSizeToken, tokenGroups, hasParentPrefix);
    let value = fontSizeToken.value?.measure;
    value = handleSpecialCase(name, value);
    const unit = CSSHelper.unitToCSS(fontSizeToken.value?.unit);

    return formatTokenStyleByOutput(name, value, hasJsOutput, unit, true);
  }

  if (hasTokenType(TokenType.lineHeight)) {
    const lineHeightToken = token as LineHeightToken;
    const name = tokenVariableName(lineHeightToken, tokenGroups, hasParentPrefix);
    let value = lineHeightToken.value?.measure;
    value = handleSpecialCase(name, value);
    const unit = CSSHelper.unitToCSS(lineHeightToken.value?.unit);

    return formatTokenStyleByOutput(name, value, hasJsOutput, unit, true);
  }

  if (hasTokenType(TokenType.letterSpacing)) {
    const letterSpacingToken = token as LetterSpacingToken;
    const name = tokenVariableName(letterSpacingToken, tokenGroups, hasParentPrefix);
    let value = letterSpacingToken.value?.measure;
    value = handleSpecialCase(name, value);
    const unit = CSSHelper.unitToCSS(letterSpacingToken.value?.unit);

    return formatTokenStyleByOutput(name, value, hasJsOutput, unit);
  }

  if (hasTokenType(TokenType.string)) {
    const stringToken = token as StringToken;
    const name = tokenVariableName(stringToken, tokenGroups, hasParentPrefix);
    let value = stringToken.value.text;
    value = handleSpecialCase(name, value);

    return formatTokenStyleByOutput(name, value, hasJsOutput);
  }

  if (hasTokenType(TokenType.color)) {
    const colorToken = token as ColorToken;
    const name = tokenVariableName(colorToken, tokenGroups, hasParentPrefix);
    const cssVariableName = `var(--${tokenPrefix}color-${name})`;

    if (hasMixin) {
      let value = CSSHelper.colorTokenValueToCSS(colorToken.value, mappedTokens, {
        allowReferences: true,
        decimals: 3,
        colorFormat: ColorFormat.hex8,
        tokenToVariableRef: () => '',
      });

      value = handleSpecialCase(name, normalizeColor(value));

      return formatTokenStyleByOutput(name, value, hasJsOutput);
    }

    return hasJsOutput ? formatTokenStyleByOutput(name, cssVariableName, true) : `$${name}: ${cssVariableName};`;
  }

  if (hasTokenType(TokenType.shadow)) {
    const shadowToken = token as ShadowToken;
    const name = tokenVariableName(token, tokenGroups, hasParentPrefix);
    const { value, origin } = shadowToken;
    let shadow = CSSHelper.shadowTokenValueToCSS(value, mappedTokens, {
      allowReferences: true,
      decimals: 3,
      colorFormat: ColorFormat.hashHex8,
      tokenToVariableRef: () => '',
    });
    // add group name to the variable if it is not already in the name
    const groupName = hasParentPrefix ? undefined : origin?.name?.split('/')[0].toLowerCase();
    shadow = transformColorsToVariables(name, shadow, tokenPrefix, groupName); // add color variables
    shadow = findAllHexColorsInStringAndNormalize(shadow); // find hex codes and normalize them
    shadow = replacePxWithRemUnits(shadow); // replace px with rem units

    return formatTokenStyleByOutput(name, shadow, hasJsOutput);
  }

  if (hasTokenType(TokenType.gradient)) {
    const gradientToken = token as GradientToken;
    const name = tokenVariableName(token, tokenGroups, hasParentPrefix);
    const { value, origin } = gradientToken;
    let gradient = CSSHelper.gradientTokenValueToCSS(value, mappedTokens, {
      allowReferences: true,
      colorFormat: ColorFormat.hashHex8,
      decimals: 3,
      tokenToVariableRef: () => '',
    });
    gradient = addAngleVarToGradient(gradient); // add angle variable
    // add group name to the variable if it is not already in the name
    const groupName = hasParentPrefix ? undefined : origin?.name?.split('/')[0].toLowerCase();
    gradient = transformColorsToVariables(name, gradient, tokenPrefix, groupName); // add color variables
    gradient = findAllHexColorsInStringAndNormalize(gradient); // find hex codes and normalize them

    return formatTokenStyleByOutput(name, gradient, hasJsOutput);
  }

  return null;
};

export const generateStylesFromTokens = (
  tokens: Token[],
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
  tokenPrefix: string,
  hasMixin: boolean,
  hasParentPrefix: boolean,
  sortByNumValue: boolean,
  hasJsOutput: boolean = false,
): string => {
  const sortedTokens = sortTokens(tokens, tokenGroups, hasParentPrefix, sortByNumValue);

  const cssTokens = sortedTokens.map((token) => ({
    css: tokenToStyleByType(token, mappedTokens, tokenGroups, tokenPrefix, hasMixin, hasParentPrefix, hasJsOutput),
    parentGroupId: token.parentGroupId,
  }));

  return addEmptyLineBetweenTokenGroups(cssTokens);
};
