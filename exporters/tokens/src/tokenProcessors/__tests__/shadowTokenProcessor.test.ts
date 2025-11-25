import { ShadowToken, TokenGroup } from '@supernovaio/sdk-exporters';
import { exampleShadowTokens } from '../../../tests/fixtures/exampleShadowTokens';
import { exampleGroups } from '../../../tests/fixtures/exampleGroups';
import { sampleConfigurationDefault } from '../../../tests/fixtures/sampleConfiguration';
import { processShadowToken } from '../shadowTokenProcessor';
import { type FontSizeBaseMap } from '../../helpers/unitHelper';

jest.mock('../../../config', () => ({
  exportConfiguration: sampleConfigurationDefault,
}));

const tokenGroups: Array<TokenGroup> = exampleGroups;
const mappedTokens: Map<string, unknown> = new Map();
const fontSizeBaseMap: FontSizeBaseMap = new Map([
  ['mobile', 14],
  ['tablet', 16],
  ['desktop', 18],
]);

describe('shadowTokenProcessor', () => {
  describe('processShadowToken', () => {
    it('should process shadow token and convert px to rem', () => {
      const token = exampleShadowTokens.get('shadowRef') as ShadowToken;
      const ctx = {
        tokenGroups,
        hasParentPrefix: false,
        hasJsOutput: false,
        tokenPrefix: 'spirit-',
        mappedTokens,
        fontSizeBaseMap,
      };

      const result = processShadowToken(token, ctx);

      expect(result).toContain('shadow-100');
      expect(result).toContain('rem');
      expect(result).not.toContain('px');
    });

    it('should process shadow token with js output', () => {
      const token = exampleShadowTokens.get('shadowRef') as ShadowToken;
      const ctx = {
        tokenGroups,
        hasParentPrefix: false,
        hasJsOutput: true,
        tokenPrefix: 'spirit-',
        mappedTokens,
        fontSizeBaseMap,
      };

      const result = processShadowToken(token, ctx);

      expect(result).toContain('export const');
      expect(result).toContain('shadow100');
      expect(result).toContain('rem');
    });

    it('should transform colors to variables', () => {
      const token = exampleShadowTokens.get('shadowRef') as ShadowToken;
      const ctx = {
        tokenGroups,
        hasParentPrefix: false,
        hasJsOutput: false,
        tokenPrefix: 'spirit-',
        mappedTokens,
        fontSizeBaseMap,
      };

      const result = processShadowToken(token, ctx);

      expect(result).toContain('var(--');
    });

    it('should handle shadow with parent prefix', () => {
      const token = exampleShadowTokens.get('shadowRef') as ShadowToken;
      const ctx = {
        tokenGroups,
        hasParentPrefix: true,
        hasJsOutput: false,
        tokenPrefix: 'spirit-',
        mappedTokens,
        fontSizeBaseMap,
      };

      const result = processShadowToken(token, ctx);

      expect(result).toBeTruthy();
      expect(result).toContain('shadow-100');
    });
  });
});
