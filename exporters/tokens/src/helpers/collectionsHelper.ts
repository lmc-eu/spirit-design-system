import { Token, TokenTheme } from '@supernovaio/sdk-exporters';
import {
  TOKEN_COLLECTION_DEVICES_NAME,
  TOKEN_COLLECTION_GLOBAL_NAME,
  TOKEN_COLLECTION_PROPERTY_NAME,
} from '../constants';

/**
 * Filters tokens based on a specific collection name and an optional exclusion flag.
 *
 * @param {Token[]} tokens - Array of tokens to filter.
 * @param collectionName - Name of the collection to filter by.
 * @param exclude {boolean} - Whether to exclude tokens matching the collection name.
 * @returns {Token[]} - Array of filtered tokens.
 */
export const filterCollections = (tokens: Token[], collectionName: string, exclude: boolean = false): Token[] => {
  return tokens.filter((item) => {
    // Check if the item is a collection
    const collectionProperty = item.properties?.find((prop) => prop.name === TOKEN_COLLECTION_PROPERTY_NAME);

    // Check if the collection has an option for tokens
    const tokenOption = collectionProperty?.options?.find((option) => option.name === collectionName);

    const collectionId = item.propertyValues?.collection;
    const tokenOptionId = tokenOption?.id;

    return exclude ? collectionId !== tokenOptionId || tokenOption === undefined : collectionId === tokenOptionId;
  });
};

/**
 * Filters tokens to find those that belong to the global collection.
 *
 * @param {Token[]} tokens - Array of tokens to filter.
 * @returns {Token[]} - Array of tokens.
 */
export const filterGlobalCollections = (tokens: Token[]) => {
  return filterCollections(tokens, TOKEN_COLLECTION_GLOBAL_NAME);
};

/**
 * Filters tokens to find those that belong to device collections.
 *
 * @param {Token[]} tokens - Array of tokens to filter.
 * @returns {Token[]} - Array of tokens.
 */
export const filterDeviceCollections = (tokens: Token[]) => {
  return filterCollections(tokens, TOKEN_COLLECTION_DEVICES_NAME);
};

/**
 * Filters all tokens except device collections.
 *
 * @param {Token[]} tokens - Array of tokens to filter.
 * @returns {Token[]} - Array of tokens.
 */
export const filterAllCollections = (tokens: Token[]) => {
  return filterCollections(tokens, TOKEN_COLLECTION_DEVICES_NAME, true);
};

/**
 * Retrieves the collection ID.
 *
 * @param {Token[]} tokens - Array of tokens to search.
 * @returns {string | boolean | number | undefined} - The collection ID if found, otherwise undefined.
 */
export const getCollectionId = (tokens: Token[]): string | boolean | number | undefined => {
  return tokens.find((item) => item.propertyValues?.collection)?.propertyValues?.collection;
};

/**
 * Retrieves the collection ID from a theme.
 *
 * @param {TokenTheme} theme - The theme object containing overridden tokens.
 * @returns {string | boolean | number | undefined} - The collection ID if found, otherwise undefined.
 */
export const getThemeCollectionId = (theme: TokenTheme): string | boolean | number | undefined => {
  return theme.overriddenTokens?.[0]?.propertyValues?.collection;
};

/**
 * Filters themes based on their collection ID and an exclusion flag.
 *
 * @param {TokenTheme[]} themes - Array of themes to filter.
 * @param {string | boolean | number | undefined} deviceCollectionId - The collection ID to compare against.
 * @param {boolean} exclude - Whether to exclude themes matching the collection ID.
 * @returns {TokenTheme[]} - Array of filtered themes.
 */
export const filterThemesByCollection = (
  themes: TokenTheme[],
  deviceCollectionId: string | boolean | number | undefined,
  exclude: boolean,
): TokenTheme[] => {
  return themes.filter((theme) => {
    const collectionId = getThemeCollectionId(theme);

    return exclude ? collectionId !== deviceCollectionId : collectionId === deviceCollectionId;
  });
};
