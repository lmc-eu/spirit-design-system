import { TokenGroup, Token, Supernova, TokenTheme } from '@supernovaio/sdk-exporters';
import { generateFileContent } from './contentGenerator';
import { FileData, nonThemedFilesData, themedFilesData } from '../config/fileConfig';

export const generateOutputFilesByThemes = async (
  tokens: Token[],
  mappedTokens: Map<string, Token>,
  tokenGroups: TokenGroup[],
  themes: TokenTheme[],
  sdk: Supernova,
): Promise<{ path: string; fileName: string; content: string }[]> => {
  const outputFiles: { path: string; fileName: string; content: string }[] = [];

  // Generate global files for non-themed tokens
  const globalFiles = generateFiles(tokens, mappedTokens, tokenGroups, nonThemedFilesData);
  outputFiles.push(
    ...globalFiles.map((file) => {
      return { path: './globals/', fileName: file.fileName, content: file.content };
    }),
  );

  // Compute themed tokens for all themes in parallel
  const allThemes = await Promise.all(
    themes.map(async (theme) => {
      const themedTokens = await sdk.tokens.computeTokensByApplyingThemes(tokens, [theme]);

      return { themedTokens, theme };
    }),
  );

  // Generate files for each theme
  for (const { themedTokens, theme } of allThemes) {
    const themeFiles = generateFiles(themedTokens, mappedTokens, tokenGroups, themedFilesData);
    outputFiles.push(
      ...themeFiles.map((file) => {
        return { path: `./themes/${theme.name}/`, fileName: file.fileName, content: file.content };
      }),
    );
  }

  return outputFiles;
};

export const generateFiles = (
  tokens: Array<Token>,
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
  filesData: FileData[],
) => {
  return filesData.map(
    // TODO: refactor this to use fileData instead of destructuring
    ({ fileName, tokenTypes, groupNames, withCssObject = true, hasParentPrefix = true, sortByNumValue = false }) => {
      const fileContent = generateFileContent(
        tokens,
        mappedTokens,
        tokenGroups,
        tokenTypes,
        groupNames,
        withCssObject,
        hasParentPrefix,
        sortByNumValue,
      );

      return {
        fileName,
        ...fileContent,
      };
    },
  );
};
