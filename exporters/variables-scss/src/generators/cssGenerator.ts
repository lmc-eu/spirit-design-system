import { DimensionToken, StringToken, Token, TokenGroup, TokenType } from '@supernovaio/sdk-exporters';
import { CSSHelper } from '@supernovaio/export-helpers';
import { formatTokenName, tokenVariableName } from '../helpers/tokenHelper';
import { handleSpecialCase } from '../helpers/specialCaseHelper';

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
