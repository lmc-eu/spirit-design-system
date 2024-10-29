import { StringToken, Token, TokenType } from '@supernovaio/sdk-exporters';

export const examplePrefixToken = new Map<string, Token>();
examplePrefixToken.set('stringRef', {
  id: 'stringRef',
  name: 'token-prefix',
  tokenType: TokenType.string,
  parentGroupId: '1',
  origin: null,
  value: { text: 'spirit-', referencedTokenId: null },
} as StringToken);
