import { Token, TokenGroup } from '@supernovaio/sdk-exporters';
import { formatTokenName, tokenVariableName } from '../tokenHelper';
import { exampleMockedGroups, exampleMockedTokens } from '../../formatters/__fixtures__/mockedExampleTokens';

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

      const result = formatTokenName(name, value, unit);

      expect(result).toBe('$grid-spacing-desktop: 32px !default;');
    });

    it('should return the expected formatted token name without unit', () => {
      const name = 'grid-columns';
      const value = 12;

      const result = formatTokenName(name, value);

      expect(result).toBe('$grid-columns: 12 !default;');
    });
  });
});
