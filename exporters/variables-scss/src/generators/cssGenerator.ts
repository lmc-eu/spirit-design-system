import { ColorToken, DimensionToken, StringToken, Token, TokenGroup, TokenType } from '@supernovaio/sdk-exporters';
import { ColorFormat, CSSHelper } from '@supernovaio/export-helpers';
import { addEmptyLineBetweenTokenGroups, formatTokenName, sortTokens, tokenVariableName } from '../helpers/tokenHelper';
import { handleSpecialCase } from '../helpers/specialCaseHelper';
import { normalizeColor } from '../helpers/colorHelper';

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
    value = handleSpecialCase(name, value);
    const unit = CSSHelper.unitToCSS(dimensionToken.value?.unit);

    return formatTokenName(name, value, unit);
  }

  if (token.tokenType === TokenType.string) {
    const stringToken = token as StringToken;
    const name = tokenVariableName(stringToken, tokenGroups, withParent);
    let value = stringToken.value.text;
    value = handleSpecialCase(name, value);

    return formatTokenName(name, value);
  }

  if (token.tokenType === TokenType.color) {
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

    return formatTokenName(name, value);
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
): string => {
  const sortedTokens = sortTokens(tokens, tokenGroups, hasParentPrefix, group, sortByNumValue);

  const cssTokens = sortedTokens.map((token) => ({
    css: tokenToCSSByType(token, mappedTokens, tokenGroups, hasParentPrefix),
    parentGroupId: token.parentGroupId,
  }));

  return addEmptyLineBetweenTokenGroups(cssTokens);
};
