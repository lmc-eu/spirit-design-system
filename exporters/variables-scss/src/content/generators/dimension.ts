import { DimensionToken, Token, TokenGroup, TokenType } from '@supernovaio/sdk-exporters';
import { CSSHelper } from '@supernovaio/export-helpers';
import { tokenVariableName } from './cssGenerator';

export const dimensionTokenToCSS = (
  token: Token,
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
  withParent: boolean,
): string | null => {
  if (token.tokenType !== TokenType.dimension) {
    return null;
  }

  const dimensionToken = token as DimensionToken;
  const name = tokenVariableName(dimensionToken, tokenGroups, withParent);
  const value = dimensionToken.value?.measure;
  const unit = CSSHelper.unitToCSS(dimensionToken.value?.unit);

  return `$${name}: ${value}${unit} !default;`;
};
