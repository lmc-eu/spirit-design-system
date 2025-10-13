import { type Token } from '@supernovaio/sdk-exporters';

/**
 *  Convert tokens to map for easier access by ID
 *
 * @param tokens List of tokens to convert
 * @returns {Map<string, Token>} Map of tokens with token ID as key and token object as value
 */
export const transformToMap = (tokens: Array<Token>) => {
  return new Map(tokens.map((token) => [token.id, token]));
};
