import { Token, TokenGroup, TokenType } from '@supernovaio/sdk-exporters';
import { tokenToCSSByType } from '../cssGenerator';
import { exampleGroups, exampleToken } from './exampleTokens';

const mappedTokens: Map<string, Token> = new Map([]);
const tokenGroups: Array<TokenGroup> = exampleGroups;

const dataProvider = [
  {
    token: exampleToken[0],
    expectedCss: '$grid-spacing-desktop: 32px !default;',
    withParent: true,
    description: 'dimension type token with parent prefix',
  },
  {
    token: exampleToken[0],
    expectedCss: '$desktop: 32px !default;',
    withParent: false,
    description: 'dimension type token without parent prefix',
  },
  {
    token: exampleToken[3],
    expectedCss: '$grid-columns: 12 !default;',
    withParent: true,
    description: 'string type token with parent prefix',
  },
  {
    token: exampleToken[3],
    expectedCss: '$columns: 12 !default;',
    withParent: false,
    description: 'string type token without parent prefix',
  },
  {
    token: {
      id: '3',
      name: 'unsupportedToken',
      tokenType: TokenType.color,
    },
    expectedCss: null,
    withParent: true,
    description: 'unsupported token type',
  },
];

describe.each(dataProvider)('tokenToCSSByType', ({ token, expectedCss, withParent, description }) => {
  it(`should correctly generate CSS for ${description}`, () => {
    const css = tokenToCSSByType(token, mappedTokens, tokenGroups, withParent);

    expect(css).toBe(expectedCss);
  });
});
