// @ts-expect-error TS2306: File is not a module.
import { getDevelopmentEndpointUri } from '../servers';

describe('servers', () => {
  describe('getDevelopmentEndpointUri', () => {
    it.each([
      // [packageName, expectedUri]
      ['web', 'http://localhost:3456/packages/web/'],
      ['web-react', 'http://localhost:3456/packages/web-react/'],
    ])('should return the correct development endpoint URI for a given package name', (packageName, expectedUri) => {
      const result = getDevelopmentEndpointUri(packageName);

      expect(result).toBe(expectedUri);
    });
  });
});
