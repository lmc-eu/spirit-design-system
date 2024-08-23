import { TokenGroup, Token, TokenType, DimensionToken } from '@supernovaio/sdk-exporters';
import { CSSHelper, NamingHelper, StringCase } from '@supernovaio/export-helpers';
import { generateSpacesObject } from './token';

type TokenHandler = (token: Token, mappedTokens: Map<string, Token>, tokenGroups: TokenGroup[]) => string | null;

const tokenVariableName = (token: Token, tokenGroups: Array<TokenGroup>, withoutParent: boolean = false): string => {
  let parent;
  if (withoutParent) {
    parent = null;
  } else {
    parent = tokenGroups.find((group) => group.id === token.parentGroupId)!;
  }

  return NamingHelper.codeSafeVariableNameForToken(token, StringCase.paramCase, parent, '');
};

export const generate = (tokens: Array<Token>, mappedTokens: Map<string, Token>, tokenGroups: Array<TokenGroup>) => {
  const spacingContent = createSpacingContent(tokens, mappedTokens, tokenGroups);

  return spacingContent;
};

const filterTokensByType = (tokens: Token[], type: TokenType): Token[] => {
  return tokens.filter((t) => t.tokenType === type);
};

const tokensToCSS = (
  tokens: Token[],
  handler: TokenHandler,
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
): string => {
  return tokens
    .map((token) => handler(token, mappedTokens, tokenGroups))
    .filter(Boolean)
    .join('\n');
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

const createSpacingContent = (tokens: Token[], mappedTokens: Map<string, Token>, tokenGroups: Array<TokenGroup>) => {
  const filteredSpacingTokens = filterTokensByType(tokens, TokenType.dimension);
  const spacingTokensToCSS = tokensToCSS(filteredSpacingTokens, measuresTokenToCSS, mappedTokens, tokenGroups);
  const spacingObject = generateSpacesObject(tokens, mappedTokens, tokenGroups);

  return `${spacingTokensToCSS}\n\n${spacingObject}`;
};
