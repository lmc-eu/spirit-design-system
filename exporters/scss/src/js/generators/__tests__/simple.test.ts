import { Token } from '../../index';
import simpleTokens from '../__fixtures__/simpleTokens.json';
import { generateSimple } from '../simple';

describe('generateSimple', () => {
  it.each([[simpleTokens]])('should generate simple output', (allTokens: Array<Token>) => {
    expect(generateSimple(allTokens)).toMatchSnapshot();
  });
});
