import { Token, TokenGroup } from '@supernovaio/sdk-exporters';
import { generateCssObjectFromTokens, getNonNumericPart } from '../cssObjectGenerator';
import { exampleMockedGroups, exampleMockedTokens } from '../../formatters/__fixtures__/mockedExampleTokens';

const mappedTokens: Map<string, Token> = new Map([]);
const tokenGroups: Array<TokenGroup> = exampleMockedGroups;

describe('cssObjectGenerator', () => {
  describe('generateCssObjectFromTokens', () => {
    it('should generate CSS object from tokens', () => {
      const css = generateCssObjectFromTokens(
        Array.from(exampleMockedTokens.values()),
        mappedTokens,
        tokenGroups,
        true,
      );

      expect(css).toStrictEqual({
        $grids: { columns: '$grid-columns', spacing: { desktop: '$grid-spacing-desktop' } },
      });
    });
  });

  describe('getNonNumericPart', () => {
    it('should return special case for radius-full', () => {
      expect(getNonNumericPart('radius-full')).toBe('full');
    });

    it('should return lowercase token name for other cases', () => {
      expect(getNonNumericPart('Grid')).toBe('grid');
    });
  });
});
