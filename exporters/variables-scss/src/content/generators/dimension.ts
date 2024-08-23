import { DimensionToken, Token, TokenGroup, TokenType } from '@supernovaio/sdk-exporters';
import { tokenVariableName } from './cssGenerator';
import { CSSHelper } from '@supernovaio/export-helpers';

export const dimensionTokenToCSS = (
  token: Token,
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
): string | null => {
  if (token.tokenType !== TokenType.dimension) {
    return null;
  }

  const dimensionToken = token as DimensionToken;
  const name = tokenVariableName(dimensionToken, tokenGroups, true);
  const value = dimensionToken.value?.measure ?? 0; // Add default value
  const unit = CSSHelper.unitToCSS(dimensionToken.value?.unit);

  return `$${name}: ${value}${unit} !default;`;
};
