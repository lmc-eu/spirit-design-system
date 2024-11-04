import { Token, TokenGroup } from '@supernovaio/sdk-exporters';
import { exampleGroups } from '../../../tests/fixtures/exampleGroups';
import { examplePrefixToken } from '../../../tests/fixtures/examplePrefixToken';
import { findTokenPrefix } from '../../helpers/findTokenPrefix';
import { generateMixinFromTokens } from '../mixinGenerator';
import { exampleColorsTokens } from '../../../tests/fixtures/exampleColorTokens';
import { SCSS_INDENTATION } from '../../constants';

const mappedTokens: Map<string, Token> = new Map([]);
const tokenGroups: Array<TokenGroup> = exampleGroups;

describe('mixinGenerator', () => {
  const dataProvider = [
    {
      tokens: exampleColorsTokens,
      groupName: '',
      hasParentPrefix: false,
      hasTokenPrefix: true,
      description: 'should generate mixin from tokens',
      expectedStyles: `${SCSS_INDENTATION}--spirit-color-active: #{$active};\n${SCSS_INDENTATION}--spirit-color-primary: #{$primary};`,
    },
    {
      tokens: exampleColorsTokens,
      groupName: '',
      hasParentPrefix: false,
      hasTokenPrefix: false,
      description: 'should generate mixin with parent prefix and no token prefix',
      expectedStyles: `${SCSS_INDENTATION}--color-active: #{$active};\n${SCSS_INDENTATION}--color-primary: #{$primary};`,
    },
  ];

  it.each(dataProvider)(
    'should correctly generate mixin for $description',
    ({ tokens, expectedStyles, groupName, hasParentPrefix, hasTokenPrefix }) => {
      const prefixTokens = Array.from(examplePrefixToken.values());
      const tokenPrefix = hasTokenPrefix ? findTokenPrefix(prefixTokens) : '';

      const styles = generateMixinFromTokens(
        Array.from(tokens.values()),
        mappedTokens,
        tokenGroups,
        tokenPrefix,
        groupName,
        hasParentPrefix,
        false,
      );

      expect(styles).toBe(`@mixin css-variables {\n${expectedStyles}\n}\n`);
    },
  );
});
