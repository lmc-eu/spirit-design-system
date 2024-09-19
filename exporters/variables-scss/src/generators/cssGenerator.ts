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
  formatTokenName,
  sortTokens,
  tokenVariableName,
} from '../helpers/tokenHelper';
import { handleSpecialCase } from '../helpers/specialCaseHelper';
import { normalizeColor } from '../helpers/colorHelper';

export const tokenToCSSByType = (
  token: Token,
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
  withParent: boolean,
  convertToJs: boolean,
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

    return formatTokenName(name, value, convertToJs, unit);
  }

  if (hasTokenType(TokenType.string)) {
    const stringToken = token as StringToken;
    const name = tokenVariableName(stringToken, tokenGroups, withParent);
    let value = stringToken.value.text;
    value = handleSpecialCase(name, value);

    return formatTokenName(name, value, convertToJs);
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

    return formatTokenName(name, value, convertToJs);
  }

  if (hasTokenType(TokenType.shadow)) {
    const shadowToken = token as ShadowToken;
    const name = tokenVariableName(token, tokenGroups, withParent);
    const { value } = shadowToken;
    const color = CSSHelper.shadowTokenValueToCSS(value, mappedTokens, {
      allowReferences: true,
      decimals: 3,
      colorFormat: ColorFormat.hashHex8,
      tokenToVariableRef: () => '',
    });

    return formatTokenName(name, color, convertToJs).replace(/0px/g, '0');
  }

  if (hasTokenType(TokenType.gradient)) {
    const gradientToken = token as GradientToken;
    const name = tokenVariableName(token, tokenGroups, withParent);
    const { value } = gradientToken;
    let gradient = CSSHelper.gradientTokenValueToCSS(value, mappedTokens, {
      allowReferences: true,
      colorFormat: ColorFormat.hashHex8,
      decimals: 3,
      tokenToVariableRef: () => '',
    });
    gradient = addAngleVarToGradient(gradient);

    return formatTokenName(name, gradient, convertToJs);
  }

  return null;
};

export const generateCssFromTokens = (
  tokens: Token[],
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
  group: string,
  hasParentPrefix: boolean,
  sortByNumValue: boolean,
  convertToJs: boolean = false,
): string => {
  const sortedTokens = sortTokens(tokens, tokenGroups, hasParentPrefix, group, sortByNumValue);

  const cssTokens = sortedTokens.map((token) => ({
    css: tokenToCSSByType(token, mappedTokens, tokenGroups, hasParentPrefix, convertToJs),
    parentGroupId: token.parentGroupId,
  }));

  return addEmptyLineBetweenTokenGroups(cssTokens);
};
