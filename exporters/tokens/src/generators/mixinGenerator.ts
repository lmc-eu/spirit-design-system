import { Token, TokenGroup } from '@supernovaio/sdk-exporters';
import { sortTokens, tokenVariableName } from '../helpers/tokenHelper';
import { SCSS_INDENTATION } from '../constants';

export const generateMixinFromTokens = (
  tokens: Token[],
  tokenGroups: Array<TokenGroup>,
  tokenPrefix: string,
  group: string,
  hasParentPrefix: boolean,
  sortByNumValue: boolean,
): string => {
  const sortedTokens = sortTokens(tokens, tokenGroups, hasParentPrefix, group, sortByNumValue);
  const variables = sortedTokens
    .map((token) => {
      const name = tokenVariableName(token, tokenGroups, hasParentPrefix);

      return `${SCSS_INDENTATION}--${tokenPrefix}color-${name}: #{$${name}};`;
    })
    .join('\n');

  return `@mixin color-css-variables {\n${variables}\n}\n`;
};
