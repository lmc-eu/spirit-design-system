import { Token } from '@supernovaio/sdk-exporters';
import { examplePrefixToken } from '../../../tests/fixtures/examplePrefixToken';
import { findTokenPrefix } from '../findTokenPrefix';

describe('findTokenPrefix', () => {
  it('should return token prefix', () => {
    const tokens = Array.from(examplePrefixToken.values());
    const expectedValue = 'spirit-';

    expect(findTokenPrefix(tokens)).toBe(expectedValue);
  });

  it('should return empty string if token prefix is not found', () => {
    const tokens = [] as Token[];
    const expectedValue = '';

    expect(findTokenPrefix(tokens)).toBe(expectedValue);
  });
});
