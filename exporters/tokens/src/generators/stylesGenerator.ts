import {
  ColorToken,
  DimensionToken,
  GradientToken,
  ShadowToken,
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

export const tokenToStyleByType = (
  token: Token,
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
  tokenPrefix: string,
  withParent: boolean,
  hasJsOutput: boolean,
): string | null => {
  const hasTokenType = (type: TokenType) => {
    const { tokenType } = token;

    return tokenType === type;
  };

  if (hasTokenType(TokenType.dimension)) {
    const dimensionToken = token as DimensionToken;
    const name = tokenVariableName(dimensionToken, tokenGroups, withParent);
    let value = dimensionToken.value?.measure;
    value = handleSpecialCase(name, value);
    const unit = CSSHelper.unitToCSS(dimensionToken.value?.unit);

    return formatTokenStyleByOutput(name, value, hasJsOutput, unit);
  }

  if (hasTokenType(TokenType.string)) {
    const stringToken = token as StringToken;
    const name = tokenVariableName(stringToken, tokenGroups, withParent);
    let value = stringToken.value.text;
    value = handleSpecialCase(name, value);

    return formatTokenStyleByOutput(name, value, hasJsOutput);
  }

  if (hasTokenType(TokenType.color)) {
    const colorToken = token as ColorToken;
    const name = tokenVariableName(colorToken, tokenGroups, withParent);
    let value = CSSHelper.colorTokenValueToCSS(colorToken.value, mappedTokens, {
      allowReferences: true,
      decimals: 3,
      colorFormat: ColorFormat.hex8,
      tokenToVariableRef: () => '',
    });
    value = normalizeColor(value);
    value = handleSpecialCase(name, value);

    return formatTokenStyleByOutput(name, value, hasJsOutput);
  }

  if (hasTokenType(TokenType.shadow)) {
    const shadowToken = token as ShadowToken;
    const name = tokenVariableName(token, tokenGroups, withParent);
    const { value, origin } = shadowToken;
    let shadow = CSSHelper.shadowTokenValueToCSS(value, mappedTokens, {
      allowReferences: true,
      decimals: 3,
      colorFormat: ColorFormat.hashHex8,
      tokenToVariableRef: () => '',
    });
    // add group name to the variable if it is not already in the name
    const groupName = withParent ? undefined : origin?.name?.split('/')[0].toLowerCase();
    shadow = transformColorsToVariables(name, shadow, tokenPrefix, groupName); // add color variables
    shadow = findAllHexColorsInStringAndNormalize(shadow); // find hex codes and normalize them

    return formatTokenStyleByOutput(name, shadow, hasJsOutput);
  }

  if (hasTokenType(TokenType.gradient)) {
    const gradientToken = token as GradientToken;
    const name = tokenVariableName(token, tokenGroups, withParent);
    const { value, origin } = gradientToken;
    let gradient = CSSHelper.gradientTokenValueToCSS(value, mappedTokens, {
      allowReferences: true,
      colorFormat: ColorFormat.hashHex8,
      decimals: 3,
      tokenToVariableRef: () => '',
    });
    gradient = addAngleVarToGradient(gradient); // add angle variable
    // add group name to the variable if it is not already in the name
    const groupName = withParent ? undefined : origin?.name?.split('/')[0].toLowerCase();
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
  group: string,
  hasParentPrefix: boolean,
  sortByNumValue: boolean,
  hasJsOutput: boolean = false,
): string => {
  const sortedTokens = sortTokens(tokens, tokenGroups, hasParentPrefix, group, sortByNumValue);

  const cssTokens = sortedTokens.map((token) => ({
    css: tokenToStyleByType(token, mappedTokens, tokenGroups, tokenPrefix, hasParentPrefix, hasJsOutput),
    parentGroupId: token.parentGroupId,
  }));

  return addEmptyLineBetweenTokenGroups(cssTokens);
};
