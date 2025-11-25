import { GradientToken, TokenGroup } from '@supernovaio/sdk-exporters';
import { exampleGradientTokens } from '../../../tests/fixtures/exampleGradientTokens';
import { exampleGroups } from '../../../tests/fixtures/exampleGroups';
import { sampleConfigurationDefault } from '../../../tests/fixtures/sampleConfiguration';
import { processGradientToken } from '../gradientTokenProcessor';

jest.mock('../../../config', () => ({
  exportConfiguration: sampleConfigurationDefault,
}));

const tokenGroups: Array<TokenGroup> = exampleGroups;
const mappedTokens: Map<string, unknown> = new Map();

describe('gradientTokenProcessor', () => {
  describe('processGradientToken', () => {
    it('should process gradient token', () => {
      const token = exampleGradientTokens.get('gradientRef') as GradientToken;
      const ctx = {
        tokenGroups,
        hasParentPrefix: false,
        hasJsOutput: false,
        tokenPrefix: 'spirit-',
        mappedTokens,
      };

      const result = processGradientToken(token, ctx);

      expect(result).toContain('gradient');
      expect(result).toContain('linear-gradient');
    });

    it('should process gradient token with js output', () => {
      const token = exampleGradientTokens.get('gradientRef') as GradientToken;
      const ctx = {
        tokenGroups,
        hasParentPrefix: false,
        hasJsOutput: true,
        tokenPrefix: 'spirit-',
        mappedTokens,
      };

      const result = processGradientToken(token, ctx);

      expect(result).toContain('export const');
    });

    it('should add angle variable to gradient', () => {
      const token = exampleGradientTokens.get('gradientRef') as GradientToken;
      const ctx = {
        tokenGroups,
        hasParentPrefix: false,
        hasJsOutput: false,
        tokenPrefix: 'spirit-',
        mappedTokens,
      };

      const result = processGradientToken(token, ctx);

      expect(result).toContain('var(--gradient-angle');
    });

    it('should transform colors to variables', () => {
      const token = exampleGradientTokens.get('gradientRef') as GradientToken;
      const ctx = {
        tokenGroups,
        hasParentPrefix: false,
        hasJsOutput: false,
        tokenPrefix: 'spirit-',
        mappedTokens,
      };

      const result = processGradientToken(token, ctx);

      expect(result).toContain('var(--');
    });

    it('should handle gradient with parent prefix', () => {
      const token = exampleGradientTokens.get('gradientRef') as GradientToken;
      const ctx = {
        tokenGroups,
        hasParentPrefix: true,
        hasJsOutput: false,
        tokenPrefix: 'spirit-',
        mappedTokens,
      };

      const result = processGradientToken(token, ctx);

      expect(result).toBeTruthy();
      expect(result).toContain('gradient');
    });
  });
});
