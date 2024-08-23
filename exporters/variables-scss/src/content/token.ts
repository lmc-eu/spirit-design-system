import { CSSHelper, NamingHelper, StringCase } from '@supernovaio/export-helpers';
import { DimensionToken, TokenGroup, Token, TokenType } from '@supernovaio/sdk-exporters';

const tokenVariableName = (token: Token, tokenGroups: Array<TokenGroup>, withoutParent: boolean = false): string => {
  let parent;
  if (withoutParent) {
    parent = null;
  } else {
    parent = tokenGroups.find((group) => group.id === token.parentGroupId)!;
  }

  return NamingHelper.codeSafeVariableNameForToken(token, StringCase.paramCase, parent, '');
};

export const generateSpacesObject = (
  tokens: Array<Token>,
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
): string => {
  let spacesObject = '$spaces: (\n';

  tokens.forEach((token) => {
    if (token.tokenType === TokenType.dimension && token.origin.name?.includes('Spacing system')) {
      const dimensionToken = token as DimensionToken;
      const name = tokenVariableName(dimensionToken, tokenGroups, true);
      const numericPart = name.match(/\d+/)?.[0];
      if (numericPart) {
        spacesObject += `    ${numericPart}: $${name},\n`;
      }
    }
  });

  spacesObject += ') !default;';

  return spacesObject;
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
