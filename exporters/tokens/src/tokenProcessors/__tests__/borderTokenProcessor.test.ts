import { BorderToken, BorderWidthToken, TokenGroup, TokenType, Unit } from '@supernovaio/sdk-exporters';
import { exampleGroups } from '../../../tests/fixtures/exampleGroups';
import { sampleConfigurationDefault } from '../../../tests/fixtures/sampleConfiguration';
import { processBorderToken } from '../borderTokenProcessor';

jest.mock('../../../config', () => ({
  exportConfiguration: sampleConfigurationDefault,
}));

const tokenGroups: Array<TokenGroup> = exampleGroups;

describe('borderTokenProcessor', () => {
  describe('processBorderToken', () => {
    it('should process border token with width', () => {
      const token = {
        id: '1',
        name: 'border-default',
        tokenType: TokenType.border,
        value: {
          width: { measure: 1, unit: Unit.pixels },
          color: { r: 0, g: 0, b: 0, a: 1 },
        },
      } as unknown as BorderToken;
      const ctx = {
        tokenGroups,
        hasParentPrefix: false,
        hasJsOutput: false,
      };

      const result = processBorderToken(token, ctx);

      expect(result).toContain('border-default');
      expect(result).toContain('1px');
    });

    it('should process borderWidth token', () => {
      const token = {
        id: '1',
        name: 'border-width-thin',
        tokenType: TokenType.borderWidth,
        value: { measure: 2, unit: Unit.pixels },
      } as unknown as BorderWidthToken;
      const ctx = {
        tokenGroups,
        hasParentPrefix: false,
        hasJsOutput: false,
      };

      const result = processBorderToken(token, ctx);

      expect(result).toContain('border-width-thin');
      expect(result).toContain('2px');
    });

    it('should process border token with js output', () => {
      const token = {
        id: '1',
        name: 'border-default',
        tokenType: TokenType.border,
        value: {
          width: { measure: 1, unit: Unit.pixels },
          color: { r: 0, g: 0, b: 0, a: 1 },
        },
      } as unknown as BorderToken;
      const ctx = {
        tokenGroups,
        hasParentPrefix: false,
        hasJsOutput: true,
      };

      const result = processBorderToken(token, ctx);

      expect(result).toContain('export const');
      expect(result).toContain('borderDefault');
    });

    it('should return null for undefined value', () => {
      const token = {
        id: '1',
        name: 'border-undefined',
        tokenType: TokenType.border,
        value: {
          width: undefined,
          color: { r: 0, g: 0, b: 0, a: 1 },
        },
      } as unknown as BorderToken;
      const ctx = {
        tokenGroups,
        hasParentPrefix: false,
        hasJsOutput: false,
      };

      const result = processBorderToken(token, ctx);

      expect(result).toBeNull();
    });
  });
});
