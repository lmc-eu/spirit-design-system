import { Token } from '../../index';
import { generateSimple } from '../simple';
import simpleTokens from '../__fixtures__/simpleTokens.json';

describe('generateSimple', () => {
  it.each([[simpleTokens]])('should generate simple output', (allTokens: Array<Token>) => {
    expect(generateSimple(allTokens)).toMatchSnapshot();
  });
});
