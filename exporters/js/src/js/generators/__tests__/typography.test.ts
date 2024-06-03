import typographyTokens from '../__fixtures__/typographyTokens.json';
import { generateTypography } from '../typography';

describe('generateTypography', () => {
  it.each([[typographyTokens]])('should generate simple output', (allTokens) => {
    expect(generateTypography(allTokens, '10', ', sans-serif', 'mobile,tablet,desktop')).toMatchSnapshot();
  });
});
