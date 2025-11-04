import { type Token } from '@supernovaio/sdk-exporters';
import { filterExcludedTokens } from '../excludedTokens';
import { exampleTypographyTokens } from '../../../tests/fixtures/exampleTypographyTokens';
import { exampleDimensionAndStringTokens } from '../../../tests/fixtures/exampleDimensionAndStringTokens';

describe('filterExcludedTokens', () => {
  it('should filter out tokens with "figma-" in their name', () => {
    const tokens = Array.from(exampleDimensionAndStringTokens.values());
    const expectedTokens = [
      exampleDimensionAndStringTokens.get('dimensionRef'),
      exampleDimensionAndStringTokens.get('stringRef'),
    ].filter(Boolean) as Token[];

    const filteredTokens = filterExcludedTokens(tokens);

    expect(filteredTokens).toStrictEqual(expectedTokens);
  });

  it('should filter out typography tokens with "Link" in their name', () => {
    const tokens = Array.from(exampleTypographyTokens.values());
    const expectedTokens = [exampleTypographyTokens.get('typographyRef1')] as Token[];

    const filteredTokens = filterExcludedTokens(tokens);

    expect(filteredTokens).toStrictEqual(expectedTokens);
  });

  it('should keep tokens that do not match exclusion criteria', () => {
    const tokens = [
      exampleDimensionAndStringTokens.get('dimensionRef'),
      exampleDimensionAndStringTokens.get('stringRef'),
      exampleTypographyTokens.get('typographyRef1'),
    ].filter(Boolean) as Token[];

    const filteredTokens = filterExcludedTokens(tokens);

    expect(filteredTokens).toStrictEqual(tokens);
  });

  it('should filter out both figma tokens and Link typography tokens', () => {
    const tokens = [
      exampleDimensionAndStringTokens.get('dimensionRef'),
      exampleDimensionAndStringTokens.get('figmaTokenRef'),
      exampleTypographyTokens.get('typographyRef1'),
      exampleTypographyTokens.get('typographyRef2'),
    ].filter(Boolean) as Token[];

    const filteredTokens = filterExcludedTokens(tokens);
    const expectedTokens = [
      exampleDimensionAndStringTokens.get('dimensionRef'),
      exampleTypographyTokens.get('typographyRef1'),
    ].filter(Boolean) as Token[];

    expect(filteredTokens).toStrictEqual(expectedTokens);
  });
});
