import {
  DimensionToken,
  GradientToken,
  ShadowToken,
  StringToken,
  Token,
  TokenGroup,
  TokenType,
} from '@supernovaio/sdk-exporters';
import { generateStylesFromTokens, tokenToStyleByType } from '../stylesGenerator';
import { exampleDimensionAndStringTokens } from '../../../tests/fixtures/exampleDimensionAndStringTokens';
import { exampleColorsTokens } from '../../../tests/fixtures/exampleColorTokens';
import { exampleGroups } from '../../../tests/fixtures/exampleGroups';
import { exampleShadowTokens } from '../../../tests/fixtures/exampleShadowTokens';
import { exampleGradientTokens } from '../../../tests/fixtures/exampleGradientTokens';

const mappedTokens: Map<string, Token> = new Map([]);
const tokenGroups: Array<TokenGroup> = exampleGroups;

describe('stylesGenerator', () => {
  describe('tokenToStyleByType', () => {
    const dataProvider = [
      {
        token: exampleDimensionAndStringTokens.get('dimensionRef') as DimensionToken,
        expectedStyles: '$grid-spacing-desktop: 32px !default;',
        hasParentPrefix: true,
        description: 'dimension type token with parent prefix',
        hasJsOutput: false,
      },
      {
        token: exampleDimensionAndStringTokens.get('dimensionRef') as DimensionToken,
        expectedStyles: '$desktop: 32px !default;',
        hasParentPrefix: false,
        description: 'dimension type token without parent prefix',
        hasJsOutput: false,
      },
      {
        token: exampleDimensionAndStringTokens.get('stringRef') as StringToken,
        expectedStyles: '$grid-columns: 12 !default;',
        hasParentPrefix: true,
        description: 'string type token with parent prefix',
        hasJsOutput: false,
      },
      {
        token: exampleDimensionAndStringTokens.get('stringRef') as StringToken,
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
        token: exampleDimensionAndStringTokens.get('dimensionRef') as DimensionToken,
        expectedStyles: `export const gridSpacingDesktop = '32px';`,
        hasParentPrefix: true,
        description: 'dimension type token with parent prefix and js output',
        hasJsOutput: true,
      },
      {
        token: exampleDimensionAndStringTokens.get('dimensionRef') as DimensionToken,
        expectedStyles: `export const desktop = '32px';`,
        hasParentPrefix: false,
        description: 'dimension type token without parent prefix and js output',
        hasJsOutput: true,
      },
      {
        token: exampleDimensionAndStringTokens.get('stringRef') as StringToken,
        expectedStyles: `export const gridColumns = '12';`,
        hasParentPrefix: true,
        description: 'string type token with parent prefix and js output',
        hasJsOutput: true,
      },
      {
        token: exampleDimensionAndStringTokens.get('stringRef') as StringToken,
        expectedStyles: `export const columns = '12';`,
        hasParentPrefix: false,
        description: 'string type token without parent prefix and js output',
        hasJsOutput: true,
      },
      {
        token: exampleShadowTokens.get('shadowRef') as ShadowToken,
        expectedStyles: `$shadow-100: 0 2px 8px 0 #00000026 !default;`,
        hasParentPrefix: false,
        description: 'shadow type token without parent prefix',
        hasJsOutput: false,
      },
      {
        token: exampleGradientTokens.get('gradientRef') as GradientToken,
        expectedStyles: `$basic-overlay: linear-gradient(var(--gradient-angle, 90deg), #ffffffff 0%, #ffffff00 100%) !default;`,
        hasParentPrefix: false,
        description: 'gradient type token without parent prefix',
        hasJsOutput: false,
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
        tokens: exampleDimensionAndStringTokens,
        groupName: 'Grid',
        hasJsOutput: false,
        hasParentPrefix: true,
        description: 'should generate styles from tokens',
        expectedStyles: '$grid-columns: 12 !default;\n\n$grid-spacing-desktop: 32px !default;',
      },
      {
        tokens: exampleDimensionAndStringTokens,
        groupName: 'Grid',
        hasJsOutput: true,
        hasParentPrefix: true,
        description: 'should generate styles from tokens with js output',
        expectedStyles: `export const gridColumns = '12';\n\nexport const gridSpacingDesktop = '32px';`,
      },
      {
        tokens: exampleColorsTokens,
        groupName: '',
        hasJsOutput: false,
        hasParentPrefix: false,
        description: 'should generate styles from tokens with colors',
        expectedStyles: `$active: #ca2026 !default;\n\n$primary: #fff !default;`,
      },
      {
        tokens: exampleColorsTokens,
        groupName: '',
        hasJsOutput: true,
        hasParentPrefix: false,
        description: 'should generate styles from tokens with colors with js output',
        expectedStyles: `export const active = '#ca2026';\n\nexport const primary = '#fff';`,
      },
      {
        tokens: exampleShadowTokens,
        groupName: '',
        hasJsOutput: false,
        hasParentPrefix: false,
        description: 'should generate styles from tokens with shadows',
        expectedStyles: `$shadow-100: 0 2px 8px 0 #00000026 !default;`,
      },
      {
        tokens: exampleGradientTokens,
        groupName: '',
        hasJsOutput: false,
        hasParentPrefix: false,
        description: 'should generate styles from tokens with gradients',
        expectedStyles: `$basic-overlay: linear-gradient(var(--gradient-angle, 90deg), #ffffffff 0%, #ffffff00 100%) !default;`,
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
