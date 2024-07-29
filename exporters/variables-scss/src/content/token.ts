import { ColorFormat, CSSHelper, NamingHelper, StringCase } from '@supernovaio/export-helpers';
import { ColorToken, Token, TokenGroup } from '@supernovaio/sdk-exporters';

export function colorTokenToCSS(
  token: ColorToken,
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
): string {
  // First creating the name of the token,
  // using helper function which turns any token name / path into a valid variable name
  const name = tokenVariableName(token, tokenGroups);

  // Then creating the value of the token, using another helper function
  const value = CSSHelper.colorTokenValueToCSS(token.value, mappedTokens, {
    allowReferences: true,
    decimals: 3,
    colorFormat: ColorFormat.smartHashHex,
    tokenToVariableRef: (t) => `var(--${tokenVariableName(t, tokenGroups)})`,
  });

  return `$${name}: ${value};`;
}

function tokenVariableName(token: Token, tokenGroups: Array<TokenGroup>): string {
  const parent = tokenGroups.find((group) => group.id === token.parentGroupId)!;

  return NamingHelper.codeSafeVariableNameForToken(token, StringCase.paramCase, parent, '');
}
