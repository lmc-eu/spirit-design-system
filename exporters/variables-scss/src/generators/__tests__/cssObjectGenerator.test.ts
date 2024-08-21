import { Token, TokenGroup } from '@supernovaio/sdk-exporters';
import { generateCssObjectFromTokens, generateObjectContent } from '../cssObjectGenerator';
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

      expect(css).toBe(
        '$grid-spacings: (\nspacing-desktop: $grid-spacing-desktop,\n) !default;\n\n$grids: (\ncolumns: $grid-columns,\n) !default;\n\n',
      );
    });
  });

  describe('generateObjectContent', () => {
    it('should generate object content', () => {
      const objectContent = generateObjectContent(
        [exampleMockedTokens.get('dimensionRef') as Token],
        tokenGroups,
        true,
      );

      expect(objectContent).toBe('spacing-desktop: $grid-spacing-desktop,\n');
    });
  });
});
