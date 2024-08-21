import { ColorFormat, CSSHelper, NamingHelper, StringCase } from '@supernovaio/export-helpers';
import { ColorToken, DimensionToken, TokenGroup, Token } from '@supernovaio/sdk-exporters';

const tokenVariableName = (token: Token, tokenGroups: Array<TokenGroup>, withoutParent: boolean = false): string => {
  let parent;
  if (withoutParent) {
    parent = null;
  } else {
    parent = tokenGroups.find((group) => group.id === token.parentGroupId)!;
  }

  return NamingHelper.codeSafeVariableNameForToken(token, StringCase.paramCase, parent, '');
};

export const colorTokenToCSS = (
  token: ColorToken,
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
): string => {
  const name = tokenVariableName(token, tokenGroups);
  const value = CSSHelper.colorTokenValueToCSS(token.value, mappedTokens, {
    allowReferences: true,
    decimals: 3,
    colorFormat: ColorFormat.smartHashHex,
    tokenToVariableRef: (t) => `var(--${tokenVariableName(t, tokenGroups)})`,
  });

  return `$${name}: ${value};`;
};

export const measuresTokenToCSS = (
  token: DimensionToken,
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
): string | null => {
  // @ts-ignore-next-line
  if (!token.origin.name?.includes('Spacing system')) {
    return null;
  }

  const name = tokenVariableName(token, tokenGroups, true);
  const value = token.value.measure;
  const unit = CSSHelper.unitToCSS(token.value.unit);

  return `$${name}: ${value}${unit} !default;`;
};

export const otherTokenToCSS = (
  token: DimensionToken,
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
): string | null => {
  // @ts-ignore-next-line
  if (!token.origin.name?.includes('Breakpoint')) {
    return null;
  }

  const name = tokenVariableName(token, tokenGroups);
  const value = token.value.measure;
  const unit = CSSHelper.unitToCSS(token.value.unit);

  return `$${name}: ${value}${unit} !default;`;
};
