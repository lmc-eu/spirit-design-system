import { filterCollections, getCollectionId } from '../collectionsHelper';
import {
  exampleCollectionTokens,
  expectedCollectionFilteredExcludedValue,
  expectedCollectionFilteredValue,
} from '../../../tests/fixtures/exampleCollectionTokens';

describe('collectionsHelper', () => {
  describe('filterCollections', () => {
    it('returns tokens matching the specified collection name', () => {
      const tokens = Array.from(exampleCollectionTokens.values());
      const result = filterCollections(tokens, 'Primitives');

      expect(result).toEqual(expectedCollectionFilteredValue);
    });

    it('excludes tokens matching the specified collection name', () => {
      const tokens = Array.from(exampleCollectionTokens.values());
      const result = filterCollections(tokens, 'Primitives', true);

      expect(result).toEqual(expectedCollectionFilteredExcludedValue);
    });
  });

  describe('getCollectionId', () => {
    it('returns the collection ID when a token with a collection is present', () => {
      const tokens = Array.from(exampleCollectionTokens.values());
      const result = getCollectionId(tokens);

      expect(result).toBe('theme-tokens-id');
    });
  });
});
