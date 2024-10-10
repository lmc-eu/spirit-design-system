import {
  DimensionToken,
  GradientToken,
  ShadowToken,
  StringToken,
  Token,
  TokenGroup,
  TokenType,
} from '@supernovaio/sdk-exporters';
import { exampleColorsTokens } from '../../../tests/fixtures/exampleColorTokens';
import { exampleDimensionAndStringTokens } from '../../../tests/fixtures/exampleDimensionAndStringTokens';
import { exampleGradientTokens } from '../../../tests/fixtures/exampleGradientTokens';
import { exampleGroups } from '../../../tests/fixtures/exampleGroups';
import { exampleShadowTokens } from '../../../tests/fixtures/exampleShadowTokens';
import { generateStylesFromTokens, tokenToStyleByType } from '../stylesGenerator';

const mappedTokens: Map<string, Token> = new Map([]);
const tokenGroups: Array<TokenGroup> = exampleGroups;

describe('stylesGenerator', () => {
  describe('tokenToStyleByType', () => {
    const dataProvider = [
      {
        token: exampleDimensionAndStringTokens.get('dimensionRef') as DimensionToken,
        description: 'dimension type token with parent prefix',
        hasParentPrefix: true,
        hasJsOutput: false,
        expectedStyles: '$grid-spacing-desktop: 32px !default;',
      },
      {
        token: exampleDimensionAndStringTokens.get('dimensionRef') as DimensionToken,
        description: 'dimension type token without parent prefix',
        hasParentPrefix: false,
        hasJsOutput: false,
        expectedStyles: '$desktop: 32px !default;',
      },
      {
        token: exampleDimensionAndStringTokens.get('stringRef') as StringToken,
        description: 'string type token with parent prefix',
        hasParentPrefix: true,
        hasJsOutput: false,
        expectedStyles: '$grid-columns: 12 !default;',
      },
      {
        token: exampleDimensionAndStringTokens.get('stringRef') as StringToken,
        description: 'string type token without parent prefix',
        hasParentPrefix: false,
        hasJsOutput: false,
        expectedStyles: '$columns: 12 !default;',
      },
      {
        token: {
          id: '3',
          name: 'unsupportedToken',
          tokenType: TokenType.duration,
        } as Token,
        description: 'unsupported token type',
        hasParentPrefix: true,
        hasJsOutput: false,
        expectedStyles: null,
      },
      {
        token: exampleDimensionAndStringTokens.get('dimensionRef') as DimensionToken,
        description: 'dimension type token with parent prefix and js output',
        hasParentPrefix: true,
        hasJsOutput: true,
        expectedStyles: "export const gridSpacingDesktop = '32px';",
      },
      {
        token: exampleDimensionAndStringTokens.get('dimensionRef') as DimensionToken,
        description: 'dimension type token without parent prefix and js output',
        hasParentPrefix: false,
        hasJsOutput: true,
        expectedStyles: "export const desktop = '32px';",
      },
      {
        token: exampleDimensionAndStringTokens.get('stringRef') as StringToken,
        description: 'string type token with parent prefix and js output',
        hasParentPrefix: true,
        hasJsOutput: true,
        expectedStyles: "export const gridColumns = '12';",
      },
      {
        token: exampleDimensionAndStringTokens.get('stringRef') as StringToken,
        description: 'string type token without parent prefix and js output',
        hasParentPrefix: false,
        hasJsOutput: true,
        expectedStyles: "export const columns = '12';",
      },
      {
        token: exampleShadowTokens.get('shadowRef') as ShadowToken,
        description: 'shadow type token without parent prefix',
        hasParentPrefix: false,
        hasJsOutput: false,
        expectedStyles: '$shadow-100: 0 2px 8px 0 var(--spirit-color-shadows-shadow-100-color-01, #00000026) !default;',
      },
      {
        token: exampleGradientTokens.get('gradientRef') as GradientToken,
        description: 'gradient type token without parent prefix',
        hasParentPrefix: false,
        hasJsOutput: false,
        expectedStyles:
          '$basic-overlay: linear-gradient(var(--gradient-angle, 90deg), var(--spirit-color-gradient-basic-overlay-color-01, #fff) 0%, var(--spirit-color-gradient-basic-overlay-color-02, #fff0) 100%) !default;',
      },
    ];

    it.each(dataProvider)(
      'should correctly generate styles for $description',
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
        expectedStyles: "export const gridColumns = '12';\n\nexport const gridSpacingDesktop = '32px';",
      },
      {
        tokens: exampleColorsTokens,
        groupName: '',
        hasJsOutput: false,
        hasParentPrefix: false,
        description: 'should generate styles from tokens with colors',
        expectedStyles: '$active: #ca2026 !default;\n\n$primary: #fff !default;',
      },
      {
        tokens: exampleColorsTokens,
        groupName: '',
        hasJsOutput: true,
        hasParentPrefix: false,
        description: 'should generate styles from tokens with colors with js output',
        expectedStyles: "export const active = '#ca2026';\n\nexport const primary = '#fff';",
      },
      {
        tokens: exampleShadowTokens,
        groupName: '',
        hasJsOutput: false,
        hasParentPrefix: false,
        description: 'should generate styles from tokens with shadows',
        expectedStyles: '$shadow-100: 0 2px 8px 0 var(--spirit-color-shadows-shadow-100-color-01, #00000026) !default;',
      },
      {
        tokens: exampleGradientTokens,
        groupName: '',
        hasJsOutput: false,
        hasParentPrefix: false,
        description: 'should generate styles from tokens with gradients',
        expectedStyles:
          '$basic-overlay: linear-gradient(var(--gradient-angle, 90deg), var(--spirit-color-gradient-basic-overlay-color-01, #fff) 0%, var(--spirit-color-gradient-basic-overlay-color-02, #fff0) 100%) !default;',
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
