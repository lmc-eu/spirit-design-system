import fs from 'fs';
import path from 'path';
import { Token, TokenGroup, TokenType } from '@supernovaio/sdk-exporters';
import { generateFileContent, addDisclaimer, filterTokensByTypeAndGroup } from '../contentGenerator';
import { exampleMockedGroups, exampleMockedTokens } from '../../formatters/__fixtures__/mockedExampleTokens';

const mockedExpectedResult = fs.readFileSync(
  path.join(__dirname, '../../formatters/__fixtures__/exampleFileContent.scss'),
  'utf-8',
);
const mappedTokens: Map<string, Token> = new Map([]);
const tokenGroups: Array<TokenGroup> = exampleMockedGroups;

describe('contentGenerator', () => {
  describe('generateFileContent', () => {
    it('should generate file content', () => {
      const tokens = Array.from(exampleMockedTokens.values());
      const tokenTypes = [TokenType.dimension, TokenType.string];
      const groupNames = ['Grid', 'String'];
      const withCssObject = true;
      const hasParentPrefix = true;

      const fileContent = generateFileContent(
        tokens,
        mappedTokens,
        tokenGroups,
        tokenTypes,
        groupNames,
        withCssObject,
        hasParentPrefix,
      );

      expect(fileContent).toStrictEqual({ content: mockedExpectedResult });
    });
  });

  describe('addDisclaimer', () => {
    it('should add disclaimer to the top of the content', () => {
      const content = '/* This is a test content */';
      const expectedContent = `/* This file was generated by Supernova, don't change manually */\n${content}`;

      expect(addDisclaimer(content)).toBe(expectedContent);
    });
  });

  describe('filterTokensByTypeAndGroup', () => {
    const dataProviderItems = [
      {
        type: TokenType.dimension,
        group: 'Grid',
        tokenIdentifier: 'dimensionRef',
        description: 'dimension token type and Grid group',
      },
      {
        type: TokenType.string,
        group: 'Grid',
        tokenIdentifier: 'stringRef',
        description: 'string token type and Grid group',
      },
    ];

    it.each(dataProviderItems)('should filter $description', ({ type, group, tokenIdentifier }) => {
      const tokens = Array.from(exampleMockedTokens.values());
      const expectedTokens = [exampleMockedTokens.get(tokenIdentifier) as Token];

      expect(filterTokensByTypeAndGroup(tokens, type, group)).toStrictEqual(expectedTokens);
    });
  });
});