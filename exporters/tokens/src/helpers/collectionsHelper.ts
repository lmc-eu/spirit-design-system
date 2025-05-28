import { Token } from '@supernovaio/sdk-exporters';
import { TOKEN_COLLECTION_DEVICES_NAME, TOKEN_PROPERTY_NAME } from '../constants';

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
    const collectionProperty = item.properties?.find((prop) => prop.name === TOKEN_PROPERTY_NAME);

    // Check if the collection has an option for tokens
    const tokenOption = collectionProperty?.options?.find((option) => option.name === collectionName);

    const collectionId = item.propertyValues?.collection;
    const tokenOptionId = tokenOption?.id;

    return exclude ? collectionId !== tokenOptionId || tokenOption === undefined : collectionId === tokenOptionId;
  });
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
