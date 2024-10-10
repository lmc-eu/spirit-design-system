import { Token, TokenGroup, TypographyToken } from '@supernovaio/sdk-exporters';
import { exampleDimensionAndStringTokens } from '../../../tests/fixtures/exampleDimensionAndStringTokens';
import { exampleGroups } from '../../../tests/fixtures/exampleGroups';
import { exampleTypographyTokens, expectedTypographyValue } from '../../../tests/fixtures/exampleTypographyTokens';
import {
  addAngleVarToGradient,
  addEmptyLineBetweenTokenGroups,
  formatTokenStyleByOutput,
  sortTokens,
  tokenVariableName,
  typographyValue,
} from '../tokenHelper';

const dataProvider = [
  {
    hasParentPrefix: true,
    description: 'with parent prefix',
    expectedVariableName: 'grid-spacing-desktop',
  },
  {
    hasParentPrefix: false,
    description: 'without parent prefix',
    expectedVariableName: 'desktop',
  },
];

describe('tokenHelper', () => {
  describe.each(dataProvider)('tokenVariableName', ({ hasParentPrefix, description, expectedVariableName }) => {
    it(`should return the expected variable name for exampleToken ${description} parent prefix`, () => {
      const mockedToken: Token = exampleDimensionAndStringTokens.get('dimensionRef') as Token;
      const mockedTokenGroups: Array<TokenGroup> = exampleGroups;

      const result = tokenVariableName(mockedToken, mockedTokenGroups, hasParentPrefix);

      expect(result).toBe(expectedVariableName);
    });
  });

  describe('formatTokenStyleByOutput', () => {
    it('should return the expected formatted token name with unit', () => {
      const name = 'grid-spacing-desktop';
      const value = 32;
      const unit = 'px';

      const result = formatTokenStyleByOutput(name, value, false, unit);

      expect(result).toBe('$grid-spacing-desktop: 32px !default;');
    });

    it('should return the expected formatted token name without unit', () => {
      const name = 'grid-columns';
      const value = 12;

      const result = formatTokenStyleByOutput(name, value, false);

      expect(result).toBe('$grid-columns: 12 !default;');
    });

    it('should return the expected formatted token name for js output', () => {
      const name = 'grid-spacing-desktop';
      const value = 32;
      const unit = 'px';

      const result = formatTokenStyleByOutput(name, value, true, unit);

      expect(result).toBe("export const gridSpacingDesktop = '32px';");
    });

    it('should return the expected formatted token name for js output without unit', () => {
      const name = 'grid-columns';
      const value = 12;

      const result = formatTokenStyleByOutput(name, value, true);

      expect(result).toBe('export const gridColumns = 12;');
    });

    it('should return the expected formatted token for zero values with unit', () => {
      const name = 'grid-columns';
      const value = 0;
      const unit = 'px';

      const result = formatTokenStyleByOutput(name, value, false, unit);

      expect(result).toBe('$grid-columns: 0 !default;');
    });

    it('should return the expected formatted token for zero values with unit for js output', () => {
      const name = 'grid-columns';
      const value = 0;
      const unit = 'px';

      const result = formatTokenStyleByOutput(name, value, true, unit);

      expect(result).toBe('export const gridColumns = 0;');
    });
  });

  describe('sortTokens', () => {
    it('should sort tokens by variable name', () => {
      const tokens = Array.from(exampleDimensionAndStringTokens.values());
      const tokenGroups = exampleGroups;
      const hasParentPrefix = true;
      const group = 'Grid';
      const sortByNumValue = false;

      const result = sortTokens(tokens, tokenGroups, hasParentPrefix, group, sortByNumValue);

      expect(result[0]?.origin?.name).toBe('Grid/Columns');
      expect(result[1]?.origin?.name).toBe('Grid/spacing/desktop');
    });

    it('should sort tokens by number value', () => {
      const tokens = Array.from(exampleDimensionAndStringTokens.values());
      const tokenGroups = exampleGroups;
      const hasParentPrefix = true;
      const group = 'Grid';
      const sortByNumValue = true;

      const result = sortTokens(tokens, tokenGroups, hasParentPrefix, group, sortByNumValue);

      expect(result[0]?.origin?.name).toBe('Grid/Columns');
      expect(result[1]?.origin?.name).toBe('Grid/spacing/desktop');
    });
  });

  describe('addEmptyLineBetweenTokenGroups', () => {
    it('should add empty line between token groups', () => {
      const cssTokens = [
        { css: '$grid-columns: 12 !default;', parentGroupId: '1' },
        { css: '$grid-spacing-desktop: 32px !default;', parentGroupId: '2' },
      ];

      const result = addEmptyLineBetweenTokenGroups(cssTokens);

      expect(result).toBe('$grid-columns: 12 !default;\n\n$grid-spacing-desktop: 32px !default;');
    });
  });

  describe('addAngleVarToGradient', () => {
    it('should add angle variable to gradient', () => {
      const inputString = 'linear-gradient(0deg, #000 0%, #fff 100%)';
      const expectedOutput = 'linear-gradient(var(--gradient-angle, 90deg), #000 0%, #fff 100%)';

      const result = addAngleVarToGradient(inputString);

      expect(result).toBe(expectedOutput);
    });

    it('should return the input string if no match is found', () => {
      const inputString = 'example string';

      const result = addAngleVarToGradient(inputString);

      expect(result).toBe(inputString);
    });
  });

  describe('typographyValue', () => {
    it('should return the expected typography value', () => {
      const mockedToken: TypographyToken = exampleTypographyTokens.get('typographyRef1') as TypographyToken;
      const tokenValue = typographyValue(mockedToken.value, true, false);

      expect(tokenValue).toBe(expectedTypographyValue);
    });
  });
});
