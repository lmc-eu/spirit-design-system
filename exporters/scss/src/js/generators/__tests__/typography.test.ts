import { generateTypography } from '../typography';
import typographyTokens from '../__fixtures__/typographyTokens.json';

describe('generateTypography', () => {
  it.each([[typographyTokens]])('should generate simple output', (allTokens) => {
    expect(generateTypography(allTokens, '10', 'Arial')).toMatchSnapshot();
  });
});
