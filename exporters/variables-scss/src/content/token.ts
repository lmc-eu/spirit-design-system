import { ColorFormat, CSSHelper, NamingHelper, StringCase } from '@supernovaio/export-helpers';
import { ColorToken, DimensionToken, TokenGroup, Token, TokenType } from '@supernovaio/sdk-exporters';

const tokenVariableName = (token: Token, tokenGroups: Array<TokenGroup>, withoutParent: boolean = false): string => {
  let parent;
  if (withoutParent) {
    parent = null;
  } else {
    parent = tokenGroups.find((group) => group.id === token.parentGroupId)!;
  }

  return NamingHelper.codeSafeVariableNameForToken(token, StringCase.paramCase, parent, '');
};

export const tokenToCSS = (
  token: Token,
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
): string | null => {
  if (token.tokenType === TokenType.color) {
    return null;
  }

  const colorToken = token as ColorToken;
  const name = tokenVariableName(colorToken, tokenGroups);
  const value = CSSHelper.colorTokenValueToCSS(colorToken.value, mappedTokens, {
    allowReferences: true,
    decimals: 3,
    colorFormat: ColorFormat.smartHashHex,
    tokenToVariableRef: (t) => `var(--${tokenVariableName(t, tokenGroups)})`,
  });

  return `$${name}: ${value};`;
};

export const colorTokenToCSS = (
  token: Token,
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
): string | null => {
  if (token.tokenType !== TokenType.color) {
    return null;
  }

  const colorToken = token as ColorToken;
  const name = tokenVariableName(colorToken, tokenGroups);
  const value = CSSHelper.colorTokenValueToCSS(colorToken.value, mappedTokens, {
    allowReferences: true,
    decimals: 3,
    colorFormat: ColorFormat.smartHashHex,
    tokenToVariableRef: (t) => `var(--${tokenVariableName(t, tokenGroups)})`,
  });

  return `$${name}: ${value};`;
};

export const measuresTokenToCSS = (
  token: Token,
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
): string | null => {
  if (token.tokenType !== TokenType.dimension) {
    return null;
  }

  const dimensionToken = token as DimensionToken;
  // @ts-ignore-next-line
  if (!token.origin.name?.includes('Spacing system')) {
    return null;
  }

  const name = tokenVariableName(dimensionToken, tokenGroups, true);
  const value = dimensionToken.value.measure;
  const unit = CSSHelper.unitToCSS(dimensionToken.value.unit);

  return `$${name}: ${value}${unit} !default;`;
};

export const otherTokenToCSS = (
  token: Token,
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
): string | null => {
  if (token.tokenType !== TokenType.dimension) {
    return null;
  }

  const otherToken = token as DimensionToken;

  // @ts-ignore-next-line
  if (!token.origin.name?.includes('Breakpoint')) {
    return null;
  }

  const name = tokenVariableName(otherToken, tokenGroups);
  const value = otherToken.value.measure;
  const unit = CSSHelper.unitToCSS(otherToken.value.unit);

  return `$${name}: ${value}${unit} !default;`;
};
