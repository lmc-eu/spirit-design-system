import { Token } from '@supernovaio/sdk-exporters';

export const generateSimple = (allTokens: Token[]) => {
  const sortedTokens = allTokens.sort((a, b) => a.name.localeCompare(b.name));

  return sortedTokens.map((token) => token);
};
