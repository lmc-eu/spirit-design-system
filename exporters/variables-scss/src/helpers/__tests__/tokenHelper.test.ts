import { Token, TokenGroup, TypographyToken } from '@supernovaio/sdk-exporters';
import {
  addAngleVarToGradient,
  addEmptyLineBetweenTokenGroups,
  formatTokenNameByOutput,
  sortTokens,
  tokenVariableName,
  typographyValue,
} from '../tokenHelper';
import { exampleMockedGroups, exampleMockedTokens } from '../../../tests/fixtures/mockedExampleTokens';
import {
  exampleMockedTypographyTokens,
  expectedTypographyValue,
} from '../../../tests/fixtures/mockedExampleTypographyTokens';

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
      const mockedToken: Token = exampleMockedTokens.get('dimensionRef') as Token;
      const mockedTokenGroups: Array<TokenGroup> = exampleMockedGroups;

      const result = tokenVariableName(mockedToken, mockedTokenGroups, hasParentPrefix);

      expect(result).toBe(expectedVariableName);
    });
  });

  describe('formatTokenName', () => {
    it('should return the expected formatted token name with unit', () => {
      const name = 'grid-spacing-desktop';
      const value = 32;
      const unit = 'px';

      const result = formatTokenNameByOutput(name, value, false, unit);

      expect(result).toBe('$grid-spacing-desktop: 32px !default;');
    });

    it('should return the expected formatted token name without unit', () => {
      const name = 'grid-columns';
      const value = 12;

      const result = formatTokenNameByOutput(name, value, false);

      expect(result).toBe('$grid-columns: 12 !default;');
    });
  });

  describe('sortTokens', () => {
    it('should sort tokens by variable name', () => {
      const tokens = Array.from(exampleMockedTokens.values());
      const tokenGroups = exampleMockedGroups;
      const hasParentPrefix = true;
      const group = 'Grid';
      const sortByNumValue = false;

      const result = sortTokens(tokens, tokenGroups, hasParentPrefix, group, sortByNumValue);

      expect(result[0]?.origin?.name).toBe('Grid/Columns');
      expect(result[1]?.origin?.name).toBe('Grid/spacing/desktop');
    });

    it('should sort tokens by number value', () => {
      const tokens = Array.from(exampleMockedTokens.values());
      const tokenGroups = exampleMockedGroups;
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
      const mockedToken: TypographyToken = exampleMockedTypographyTokens.get('typographyRef1') as TypographyToken;
      const tokenValue = typographyValue(mockedToken.value, true, false);

      expect(tokenValue).toBe(expectedTypographyValue);
    });
  });
});
