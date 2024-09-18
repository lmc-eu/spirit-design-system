import { TokenGroup, Token, Supernova, TokenTheme } from '@supernovaio/sdk-exporters';
import { generateFileContent } from './contentGenerator';
import { FileData, nonThemedFilesData, themedFilesData } from '../config/fileConfig';

export const generateFiles = (
  tokens: Array<Token>,
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
  filesData: FileData[],
) => {
  return filesData.map((fileData) => {
    const fileContent = generateFileContent(tokens, mappedTokens, tokenGroups, fileData);

    return {
      fileName: fileData.fileName,
      ...fileContent,
    };
  });
};

export const generateIndexFile = (files: { fileName: string; content: string }[]) => {
  return `${files
    .map((file) => {
      const baseName = file.fileName.replace(/^_/, '').replace(/\.scss$/, '');

      return `@forward '${baseName}';`;
    })
    .join('\n')}\n`;
};

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
  const globalIndexFile = generateIndexFile(globalFiles);
  outputFiles.push(
    ...globalFiles.map((file) => ({ path: './globals/', fileName: file.fileName, content: file.content })),
  );
  outputFiles.push({ path: './globals/', fileName: 'index.scss', content: globalIndexFile });

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
    const themeIndexFile = generateIndexFile(themeFiles);
    outputFiles.push(
      ...themeFiles.map((file) => ({
        path: `./themes/${theme.name}/`,
        fileName: file.fileName,
        content: file.content,
      })),
    );
    outputFiles.push({ path: `./themes/${theme.name}/`, fileName: 'index.scss', content: themeIndexFile });
  }

  return outputFiles;
};
