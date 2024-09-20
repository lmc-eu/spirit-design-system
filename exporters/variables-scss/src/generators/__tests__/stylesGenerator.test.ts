import { DimensionToken, StringToken, Token, TokenGroup, TokenType } from '@supernovaio/sdk-exporters';
import { generateStylesFromTokens, tokenToStyleByType } from '../stylesGenerator';
import { exampleMockedGroups, exampleMockedTokens } from '../../../tests/fixtures/mockedExampleTokens';
import { exampleMockedColorGroups, exampleMockedColorsTokens } from '../../../tests/fixtures/mockedExampleColorTokens';

const mappedTokens: Map<string, Token> = new Map([]);
const tokenGroups: Array<TokenGroup> = exampleMockedGroups;

describe('stylesGenerator', () => {
  describe('tokenToCSSByType', () => {
    const dataProvider = [
      {
        token: exampleMockedTokens.get('dimensionRef') as DimensionToken,
        expectedStyles: '$grid-spacing-desktop: 32px !default;',
        hasParentPrefix: true,
        description: 'dimension type token with parent prefix',
        hasJsOutput: false,
      },
      {
        token: exampleMockedTokens.get('dimensionRef') as DimensionToken,
        expectedStyles: '$desktop: 32px !default;',
        hasParentPrefix: false,
        description: 'dimension type token without parent prefix',
        hasJsOutput: false,
      },
      {
        token: exampleMockedTokens.get('stringRef') as StringToken,
        expectedStyles: '$grid-columns: 12 !default;',
        hasParentPrefix: true,
        description: 'string type token with parent prefix',
        hasJsOutput: false,
      },
      {
        token: exampleMockedTokens.get('stringRef') as StringToken,
        expectedStyles: '$columns: 12 !default;',
        hasParentPrefix: false,
        description: 'string type token without parent prefix',
        hasJsOutput: false,
      },
      {
        token: {
          id: '3',
          name: 'unsupportedToken',
          tokenType: TokenType.duration,
        } as Token,
        expectedStyles: null,
        hasParentPrefix: true,
        description: 'unsupported token type',
        hasJsOutput: false,
      },
      {
        token: exampleMockedTokens.get('dimensionRef') as DimensionToken,
        expectedStyles: `export const gridSpacingDesktop = '32px';`,
        hasParentPrefix: true,
        description: 'dimension type token with parent prefix and js output',
        hasJsOutput: true,
      },
      {
        token: exampleMockedTokens.get('dimensionRef') as DimensionToken,
        expectedStyles: `export const desktop = '32px';`,
        hasParentPrefix: false,
        description: 'dimension type token without parent prefix and js output',
        hasJsOutput: true,
      },
      {
        token: exampleMockedTokens.get('stringRef') as StringToken,
        expectedStyles: `export const gridColumns = '12';`,
        hasParentPrefix: true,
        description: 'string type token with parent prefix and js output',
        hasJsOutput: true,
      },
      {
        token: exampleMockedTokens.get('stringRef') as StringToken,
        expectedStyles: `export const columns = '12';`,
        hasParentPrefix: false,
        description: 'string type token without parent prefix and js output',
        hasJsOutput: true,
      },
    ];

    it.each(dataProvider)(
      `should correctly generate styles for $description`,
      ({ token, expectedStyles, hasParentPrefix, hasJsOutput }) => {
        const styles = tokenToStyleByType(token, mappedTokens, tokenGroups, hasParentPrefix, hasJsOutput);

        expect(styles).toBe(expectedStyles);
      },
    );
  });

  describe('generateStylesFromTokens', () => {
    const dataProvider = [
      {
        tokens: exampleMockedTokens,
        tokenGroups: exampleMockedGroups,
        groupName: 'Grid',
        hasJsOutput: false,
        hasParentPrefix: true,
        description: 'should generate styles from tokens',
        expectedStyles: '$grid-columns: 12 !default;\n\n$grid-spacing-desktop: 32px !default;',
      },
      {
        tokens: exampleMockedTokens,
        tokenGroups: exampleMockedGroups,
        groupName: 'Grid',
        hasJsOutput: true,
        hasParentPrefix: true,
        description: 'should generate styles from tokens with js output',
        expectedStyles: `export const gridColumns = '12';\n\nexport const gridSpacingDesktop = '32px';`,
      },
      {
        tokens: exampleMockedColorsTokens,
        tokenGroups: exampleMockedColorGroups,
        groupName: '',
        hasJsOutput: false,
        hasParentPrefix: false,
        description: 'should generate styles from tokens with colors',
        expectedStyles: `$active: #ca2026 !default;\n\n$primary: #fff !default;`,
      },
      {
        tokens: exampleMockedColorsTokens,
        tokenGroups: exampleMockedColorGroups,
        groupName: '',
        hasJsOutput: true,
        hasParentPrefix: false,
        description: 'should generate styles from tokens with colors with js output',
        expectedStyles: `export const active = '#ca2026';\n\nexport const primary = '#fff';`,
      },
    ];

    it.each(dataProvider)('$description', ({ tokens, groupName, hasJsOutput, hasParentPrefix, expectedStyles }) => {
      const styles = generateStylesFromTokens(
        Array.from(tokens.values()),
        mappedTokens,
        tokenGroups,
        groupName,
        hasParentPrefix,
        false,
        hasJsOutput,
      );

      expect(styles).toBe(expectedStyles);
    });
  });
});
