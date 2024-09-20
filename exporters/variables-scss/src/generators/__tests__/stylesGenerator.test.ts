import { DimensionToken, StringToken, Token, TokenGroup, TokenType } from '@supernovaio/sdk-exporters';
import { generateStylesFromTokens, tokenToStyleByType } from '../stylesGenerator';
import { exampleMockedGroups, exampleMockedTokens } from '../../../tests/fixtures/mockedExampleTokens';

const mappedTokens: Map<string, Token> = new Map([]);
const tokenGroups: Array<TokenGroup> = exampleMockedGroups;

const dataProvider = [
  {
    token: exampleMockedTokens.get('dimensionRef') as DimensionToken,
    expectedCss: '$grid-spacing-desktop: 32px !default;',
    hasParentPrefix: true,
    description: 'dimension type token with parent prefix',
    hasJsOutput: false,
  },
  {
    token: exampleMockedTokens.get('dimensionRef') as DimensionToken,
    expectedCss: '$desktop: 32px !default;',
    hasParentPrefix: false,
    description: 'dimension type token without parent prefix',
    hasJsOutput: false,
  },
  {
    token: exampleMockedTokens.get('stringRef') as StringToken,
    expectedCss: '$grid-columns: 12 !default;',
    hasParentPrefix: true,
    description: 'string type token with parent prefix',
    hasJsOutput: false,
  },
  {
    token: exampleMockedTokens.get('stringRef') as StringToken,
    expectedCss: '$columns: 12 !default;',
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
    expectedCss: null,
    hasParentPrefix: true,
    description: 'unsupported token type',
    hasJsOutput: false,
  },
  {
    token: exampleMockedTokens.get('dimensionRef') as DimensionToken,
    expectedCss: `export const gridSpacingDesktop = '32px';`,
    hasParentPrefix: true,
    description: 'dimension type token with parent prefix and js output',
    hasJsOutput: true,
  },
  {
    token: exampleMockedTokens.get('dimensionRef') as DimensionToken,
    expectedCss: `export const desktop = '32px';`,
    hasParentPrefix: false,
    description: 'dimension type token without parent prefix and js output',
    hasJsOutput: true,
  },
  {
    token: exampleMockedTokens.get('stringRef') as StringToken,
    expectedCss: `export const gridColumns = '12';`,
    hasParentPrefix: true,
    description: 'string type token with parent prefix and js output',
    hasJsOutput: true,
  },
  {
    token: exampleMockedTokens.get('stringRef') as StringToken,
    expectedCss: `export const columns = '12';`,
    hasParentPrefix: false,
    description: 'string type token without parent prefix and js output',
    hasJsOutput: true,
  },
];

describe('stylesGenerator', () => {
  describe.each(dataProvider)(
    'tokenToCSSByType',
    ({ token, expectedCss, hasParentPrefix, description, hasJsOutput }) => {
      it(`should correctly generate styles for ${description}`, () => {
        const css = tokenToStyleByType(token, mappedTokens, tokenGroups, hasParentPrefix, hasJsOutput);

        expect(css).toBe(expectedCss);
      });
    },
  );

  describe('generateStylesFromTokens', () => {
    const generateStylesDataProvider = [
      {
        hasJsOutput: false,
        description: 'should generate styles from tokens',
        expectedStyles: '$grid-columns: 12 !default;\n\n$grid-spacing-desktop: 32px !default;',
      },
      {
        hasJsOutput: true,
        description: 'should generate styles from tokens with js output',
        expectedStyles: `export const gridColumns = '12';\n\nexport const gridSpacingDesktop = '32px';`,
      },
    ];

    it.each(generateStylesDataProvider)('$description', ({ hasJsOutput, expectedStyles }) => {
      const css = generateStylesFromTokens(
        Array.from(exampleMockedTokens.values()),
        mappedTokens,
        tokenGroups,
        'Grid',
        true,
        false,
        hasJsOutput,
      );

      expect(css).toBe(expectedStyles);
    });
  });
});
