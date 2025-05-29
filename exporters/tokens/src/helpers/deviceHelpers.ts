import { Token, TokenTheme } from '@supernovaio/sdk-exporters';
import { toCamelCase } from './stringHelper';

/**
 * Merges device tokens with their respective themes and updates their property values
 * to include the device theme's code name.
 *
 * @param {Array<{ theme: TokenTheme; deviceTokens: Token[] }>} allDevices - theme and its associated device tokens.
 * @returns {Token[]} - An array of tokens with updated property values including the device theme.
 */
export const getDeviceThemes = (allDevices: { theme: TokenTheme; deviceTokens: Token[] }[]): Token[] => {
  const overriddenTokens: Token[] = [];

  for (const { theme, deviceTokens } of allDevices) {
    const updatedTokens = deviceTokens.map((token) => {
      // Create a new token object and update its propertyValues to include the device theme
      const newToken = Object.create(token);
      Object.assign(newToken, {
        ...token,
        propertyValues: { ...token.propertyValues, device: theme.codeName },
      });

      return newToken;
    });
    overriddenTokens.push(...updatedTokens);
  }

  return overriddenTokens;
};

/**
 * Retrieves the device alias from a token.
 *
 * @param {Token | undefined} token - The token from which to extract the device alias.
 * @returns {string} - The device alias if present, otherwise an empty string.
 */
export const getDeviceAlias = (token: Token | undefined): string => {
  return String(token?.propertyValues?.device || '');
};

/**
 * Generates a device-specific token value by appending the device name to the token value.
 * Optionally converts the result to camelCase if `hasJsOutput` is true.
 *
 * @param {string} tokenValue - The base token value.
 * @param {string} device - The device name to append.
 * @param {boolean} [hasJsOutput] - Whether to convert the result to camelCase.
 * @returns {string} - The device-specific token value.
 */
export const getDeviceTokenValue = (tokenValue: string, device: string, hasJsOutput = false): string => {
  const deviceTokenValue = `${tokenValue}-${device}`;

  return hasJsOutput ? toCamelCase(deviceTokenValue) : deviceTokenValue;
};
