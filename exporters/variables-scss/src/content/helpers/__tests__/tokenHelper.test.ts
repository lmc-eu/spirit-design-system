import { Token, TokenGroup } from '@supernovaio/sdk-exporters';
import { tokenVariableName } from '../tokenHelper';
import { exampleGroups, exampleToken } from '../../generators/__tests__/exampleTokens';

describe('tokenHelper', () => {
  it('should return the expected variable name for exampleToken', () => {
    const expectedVariableName = 'grid-spacing-desktop';

    const mockedToken: Token = exampleToken[0];
    const mockedTokenGroups: Array<TokenGroup> = exampleGroups;

    const result = tokenVariableName(mockedToken, mockedTokenGroups, true);

    expect(result).toBe(expectedVariableName);
  });
});
