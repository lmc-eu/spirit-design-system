import { Token, TokenGroup, TokenType } from '@supernovaio/sdk-exporters';
import { exportConfiguration } from '../../index';
import { generateCssFromTokens, generateCssObjectFromTokens } from './cssGenerator';

const addDisclaimer = (content: string): string => {
  if (exportConfiguration.generateDisclaimer) {
    return `/* This file was generated by Supernova, don't change manually */\n${content}`;
  }

  return content;
};

export const createFileWithContent = (
  tokens: Token[],
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
  fileName: string,
  tokenTypes: TokenType[],
  groupNames: string[],
  withCssObject: boolean,
  withParent: boolean = false,
) => {
  let cssTokens = '';
  let cssObject = '';

  // iterate over token types and group names to filter tokens
  tokenTypes.forEach((tokenType) => {
    groupNames.forEach((group) => {
      const filteredTokens = tokens.filter(
        (token) => token.tokenType === tokenType && token.origin?.name?.includes(group),
      );

      // generate css tokens
      cssTokens += generateCssFromTokens(filteredTokens, mappedTokens, tokenGroups, withParent);
      cssTokens += '\n\n';

      // generate css object
      const tempCssObject = generateCssObjectFromTokens(filteredTokens, mappedTokens, tokenGroups, withParent);
      if (tempCssObject !== null) {
        cssObject += tempCssObject;
      }
    });
  });

  let content = withCssObject ? `${cssTokens}${cssObject}` : cssTokens;

  // Remove extra blank lines
  content = content.replace(/\n{3,}/g, '\n\n');

  return {
    fileName,
    content: addDisclaimer(content),
  };
};
