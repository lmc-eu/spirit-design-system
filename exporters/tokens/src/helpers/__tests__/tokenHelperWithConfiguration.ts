import { TypographyToken } from '@supernovaio/sdk-exporters';
import { sampleConfiguration } from '../../../tests/fixtures/sampleConfiguration';
import {
  exampleTypographyTokens,
  expectedTypographyWithFontReplacement,
} from '../../../tests/fixtures/exampleTypographyTokens';
import { typographyValue } from '../tokenHelper';

// Mocks the Supernova sample configuration with populated data
jest.mock('../../../config', () => ({
  exportConfiguration: sampleConfiguration,
}));

describe('typographyValue with override config', () => {
  it('should return the renamed font and substitute font', () => {
    const mockedToken: TypographyToken = exampleTypographyTokens.get('typographyRef1') as TypographyToken;
    const tokenValue = typographyValue(mockedToken.value, true, false);

    expect(tokenValue).toBe(expectedTypographyWithFontReplacement);
  });
});
