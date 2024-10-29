import { StringToken, Token, TokenType } from '@supernovaio/sdk-exporters';

const TOKEN_PREFIX_NAME = 'token-prefix';

export const findTokenPrefix = (tokens: Token[]): string => {
  const prefixToken = tokens.find(
    (token) => token.tokenType === TokenType.string && token.name === TOKEN_PREFIX_NAME,
  ) as StringToken | undefined;
  const prefixTokenValue = prefixToken?.value?.text ?? '';

  return prefixTokenValue;
};
