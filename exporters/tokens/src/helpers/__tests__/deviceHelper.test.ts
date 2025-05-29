import { TokenTheme, Token } from '@supernovaio/sdk-exporters';
import { getDeviceAlias, getDeviceThemes, getDeviceTokenValue } from '../deviceHelpers';
import { exampleDeviceTokens, exampleDeviceUpdatedTokens } from '../../../tests/fixtures/exampleDeviceTokens';

describe('deviceHelper', () => {
  describe('getDeviceThemes', () => {
    it('merges tokens with updated device property values', () => {
      const tokens = Array.from(exampleDeviceTokens.values());
      const expectedTokens = Array.from(exampleDeviceUpdatedTokens.values());

      const allDevices: { theme: TokenTheme; deviceTokens: Token[] }[] = [
        {
          theme: {
            codeName: 'mobile',
            id: 'test-id',
            idInVersion: 'test-id-in-version',
            brandId: 'test-brand-id',
            designSystemVersionId: 'test-ds-version-id',
          } as TokenTheme,
          deviceTokens: tokens,
        },
      ];
      const result = getDeviceThemes(allDevices);

      expect(result).toEqual(expectedTokens);
    });

    it('handles empty device tokens gracefully', () => {
      const allDevices: { theme: TokenTheme; deviceTokens: Token[] }[] = [
        { theme: { codeName: 'theme1' } as TokenTheme, deviceTokens: [] },
      ];
      const result = getDeviceThemes(allDevices);

      expect(result).toEqual([]);
    });

    it('handles empty allDevices array gracefully', () => {
      const allDevices: { theme: TokenTheme; deviceTokens: Token[] }[] = [];
      const result = getDeviceThemes(allDevices);

      expect(result).toEqual([]);
    });
  });

  describe('getDeviceAlias', () => {
    it('returns the device alias if present', () => {
      const token = exampleDeviceUpdatedTokens.get('stringRef1');
      const result = getDeviceAlias(token);

      expect(result).toBe('mobile');
    });

    it('returns an empty string if device alias is missing', () => {
      const token = exampleDeviceTokens.get('stringRef2');
      const result = getDeviceAlias(token);

      expect(result).toBe('');
    });
  });

  describe('getDeviceTokenValue', () => {
    it('returns the concatenated token value and device', () => {
      const result = getDeviceTokenValue('value', 'device');

      expect(result).toBe('value-device');
    });

    it('returns camelCase token value when hasJsOutput is true', () => {
      const result = getDeviceTokenValue('value', 'device', true);

      expect(result).toBe('valueDevice');
    });
  });
});
