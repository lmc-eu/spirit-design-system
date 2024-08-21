import { DimensionToken, StringToken, Token, TokenGroup, TokenType } from '@supernovaio/sdk-exporters';
import { generateCssFromTokens, tokenToCSSByType } from '../cssGenerator';
import { exampleMockedGroups, exampleMockedTokens } from '../../formatters/__fixtures__/mockedExampleTokens';

const mappedTokens: Map<string, Token> = new Map([]);
const tokenGroups: Array<TokenGroup> = exampleMockedGroups;

const dataProvider = [
  {
    token: exampleMockedTokens.get('dimensionRef') as DimensionToken,
    expectedCss: '$grid-spacing-desktop: 32px !default;',
    hasParentPrefix: true,
    description: 'dimension type token with parent prefix',
  },
  {
    token: exampleMockedTokens.get('dimensionRef') as DimensionToken,
    expectedCss: '$desktop: 32px !default;',
    hasParentPrefix: false,
    description: 'dimension type token without parent prefix',
  },
  {
    token: exampleMockedTokens.get('stringRef') as StringToken,
    expectedCss: '$grid-columns: 12 !default;',
    hasParentPrefix: true,
    description: 'string type token with parent prefix',
  },
  {
    token: exampleMockedTokens.get('stringRef') as StringToken,
    expectedCss: '$columns: 12 !default;',
    hasParentPrefix: false,
    description: 'string type token without parent prefix',
  },
  {
    token: {
      id: '3',
      name: 'unsupportedToken',
      tokenType: TokenType.color,
    } as Token,
    expectedCss: null,
    hasParentPrefix: true,
    description: 'unsupported token type',
  },
];

describe('cssGenerator', () => {
  describe.each(dataProvider)('tokenToCSSByType', ({ token, expectedCss, hasParentPrefix, description }) => {
    it(`should correctly generate CSS for ${description}`, () => {
      const css = tokenToCSSByType(token, mappedTokens, tokenGroups, hasParentPrefix);

      expect(css).toBe(expectedCss);
    });
  });

  describe('generateCssFromTokens', () => {
    it('should generate CSS from tokens', () => {
      const css = generateCssFromTokens(Array.from(exampleMockedTokens.values()), mappedTokens, tokenGroups, true);

      expect(css).toBe('$grid-spacing-desktop: 32px !default;\n$grid-columns: 12 !default;');
    });
  });
});
