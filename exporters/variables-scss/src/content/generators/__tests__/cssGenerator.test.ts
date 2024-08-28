import { DimensionToken, StringToken, Token, TokenGroup, TokenType } from '@supernovaio/sdk-exporters';
import { tokenToCSSByType } from '../cssGenerator';
import { exampleGroups, exampleToken } from './exampleTokens';

const dimensionToken: DimensionToken = exampleToken[0];
const stringToken: StringToken = exampleToken[3];
const mappedTokens: Map<string, Token> = new Map([[dimensionToken.id, dimensionToken]]);
const tokenGroups: Array<TokenGroup> = exampleGroups;
const withParent: boolean = true;

describe('tokenToCSSByType', () => {
  it('should correctly generate CSS for dimension token', () => {
    const css = tokenToCSSByType(dimensionToken, mappedTokens, tokenGroups, withParent);

    const expectedCSS = `$grid-spacing-desktop: 32px !default;`;

    expect(css).toBe(expectedCSS);
  });

  it('should correctly generate CSS for string token', () => {
    const css = tokenToCSSByType(stringToken, mappedTokens, tokenGroups, withParent);

    const expectedCSS = `$grid-columns: 12 !default;`;

    expect(css).toBe(expectedCSS);
  });

  it('should return null for unsupported token type', () => {
    const unsupportedToken: Token = {
      id: '3',
      name: 'unsupportedToken',
      tokenType: TokenType.color,
    };

    const css = tokenToCSSByType(unsupportedToken, mappedTokens, tokenGroups, withParent);

    expect(css).toBeNull();
  });
});
