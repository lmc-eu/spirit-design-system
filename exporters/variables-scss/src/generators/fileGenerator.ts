import { TokenGroup, Token, Supernova, TokenTheme } from '@supernovaio/sdk-exporters';
import { generateFileContent } from './contentGenerator';
import { FileData, nonThemedFilesData, themedFilesData } from '../config/fileConfig';
import { toCamelCase } from '../helpers/stringHelper';

export const generateFiles = (
  tokens: Array<Token>,
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
  filesData: FileData[],
  hasJsOutput: boolean = false,
) => {
  return filesData.map((fileData) => {
    const fileContent = generateFileContent(tokens, mappedTokens, tokenGroups, fileData, hasJsOutput);

    return {
      fileName: fileData.fileName,
      ...fileContent,
    };
  });
};

export const generateIndexFile = (files: { fileName: string; content: string }[], hasJsOutput: boolean = false) => {
  return `${files
    .map((file) => {
      const fileExtension = hasJsOutput ? 'ts' : 'scss';
      const baseName = file.fileName.replace(/^_/, '').replace(new RegExp(`\\.${fileExtension}$`), '');

      return hasJsOutput ? `export * from './${baseName}';` : `@forward '${baseName}';`;
    })
    .join('\n')}\n`;
};

export const generateThemesRootFileContent = (themes: TokenTheme[], hasJsOutput: boolean = false): string => {
  let content = '';

  // Add import statements for each theme
  for (const theme of themes) {
    if (hasJsOutput) {
      content += `import * as ${toCamelCase(theme.name)} from './themes/${theme.name}';\n`;
    } else {
      content += `@use 'themes/${theme.name}';\n`;
    }
  }

  // Start the themes object or $themes map
  if (hasJsOutput) {
    content += '\nexport const themes = {\n';
  } else {
    content += '\n$themes: (\n';
  }

  // Add each theme to the themes object or $themes map
  for (const theme of themes) {
    if (hasJsOutput) {
      content += `\t${toCamelCase(theme.name)}: {\n\t\tcolors: ${toCamelCase(theme.name)}.colors\n},\n`;
    } else {
      content += `    ${theme.name}: (\n        colors: ${theme.name}.$colors,\n    ),\n`;
    }
  }

  // End the themes object or $themes map
  if (hasJsOutput) {
    content += '};\n';
  } else {
    content += ');\n';
  }

  return content;
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
  const globalJsFiles = generateFiles(tokens, mappedTokens, tokenGroups, nonThemedFilesData, true);
  const globalIndexFile = generateIndexFile(globalFiles);
  const globalJsIndexFile = generateIndexFile(globalJsFiles, true);
  outputFiles.push(
    ...globalFiles.map((file) => ({
      path: './scss/global',
      fileName: `_${file.fileName}.scss`,
      content: file.content,
    })),
    ...globalJsFiles.map((file) => ({
      path: './js/global/',
      fileName: `${file.fileName}.ts`,
      content: file.content,
    })),
  );
  outputFiles.push({ path: './scss/global/', fileName: 'index.scss', content: globalIndexFile });
  outputFiles.push({ path: './js/global/', fileName: 'index.ts', content: globalJsIndexFile });
  outputFiles.push({ path: './scss/', fileName: '@global.scss', content: `@forward 'global';` });
  outputFiles.push({ path: './js/', fileName: '@global.ts', content: `export * from './global';` });

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
    const themeTsFiles = generateFiles(themedTokens, mappedTokens, tokenGroups, themedFilesData, true);
    const themeIndexFile = generateIndexFile(themeFiles);
    const themeTsIndexFile = generateIndexFile(themeTsFiles, true);
    outputFiles.push(
      ...themeFiles.map((file) => ({
        path: `./scss/themes/${theme.name}/`,
        fileName: `_${file.fileName}.scss`,
        content: file.content,
      })),
      ...themeTsFiles.map((file) => ({
        path: `./js/themes/${theme.name}/`,
        fileName: `${file.fileName}.ts`,
        content: file.content,
      })),
    );
    outputFiles.push({ path: `./scss/themes/${theme.name}/`, fileName: 'index.scss', content: themeIndexFile });
    outputFiles.push({ path: `./js/themes/${theme.name}/`, fileName: 'index.ts', content: themeTsIndexFile });
  }

  // Generate root themes file
  const rootThemesFileContent = generateThemesRootFileContent(themes);
  const rootTsThemesFileContent = generateThemesRootFileContent(themes, true);
  outputFiles.push({ path: './scss/', fileName: '@themes.scss', content: rootThemesFileContent });
  outputFiles.push({ path: './js/', fileName: '@themes.ts', content: rootTsThemesFileContent });

  return outputFiles;
};
