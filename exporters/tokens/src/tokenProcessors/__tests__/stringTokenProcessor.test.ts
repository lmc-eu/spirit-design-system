import { StringToken, TokenGroup, TokenType } from '@supernovaio/sdk-exporters';
import { exampleDimensionAndStringTokens } from '../../../tests/fixtures/exampleDimensionAndStringTokens';
import { exampleGroups } from '../../../tests/fixtures/exampleGroups';
import { sampleConfigurationDefault } from '../../../tests/fixtures/sampleConfiguration';
import { processStringToken } from '../stringTokenProcessor';

jest.mock('../../../config', () => ({
  exportConfiguration: sampleConfigurationDefault,
}));

const tokenGroups: Array<TokenGroup> = exampleGroups;

describe('stringTokenProcessor', () => {
  describe('processStringToken', () => {
    it('should process string token', () => {
      const token = exampleDimensionAndStringTokens.get('stringRef') as StringToken;
      const ctx = {
        tokenGroups,
        hasParentPrefix: true,
        hasJsOutput: false,
      };

      const result = processStringToken(token, ctx);

      expect(result).toBe('$grid-columns: 12 !default;');
    });

    it('should process string token without parent prefix', () => {
      const token = exampleDimensionAndStringTokens.get('stringRef') as StringToken;
      const ctx = {
        tokenGroups,
        hasParentPrefix: false,
        hasJsOutput: false,
      };

      const result = processStringToken(token, ctx);

      expect(result).toBe('$columns: 12 !default;');
    });

    it('should process string token with js output', () => {
      const token = exampleDimensionAndStringTokens.get('stringRef') as StringToken;
      const ctx = {
        tokenGroups,
        hasParentPrefix: true,
        hasJsOutput: true,
      };

      const result = processStringToken(token, ctx);

      expect(result).toBe("export const gridColumns = '12';");
    });

    it('should handle special case values', () => {
      const token = {
        id: '1',
        name: 'grid-columns',
        tokenType: TokenType.string,
        value: { text: '12' },
      } as StringToken;
      const ctx = {
        tokenGroups,
        hasParentPrefix: true,
        hasJsOutput: false,
      };

      const result = processStringToken(token, ctx);

      expect(result).toBe('$grid-columns: 12 !default;');
    });
  });
});
