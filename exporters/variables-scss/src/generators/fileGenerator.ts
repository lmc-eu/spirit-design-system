import { TokenGroup, Token, Supernova, TokenTheme } from '@supernovaio/sdk-exporters';
import { generateFileContent } from './contentGenerator';
import { FileData, nonThemedFilesData, themedFilesData } from '../config/fileConfig';
import { toCamelCase } from '../helpers/stringHelper';
import { indentAndFormat } from '../formatters/stylesFormatter';
import { COLOR_KEY } from './stylesObjectGenerator';

export const THEMES_DIRECTORY = 'themes';
export const GLOBAL_DIRECTORY = 'global';
export const SCSS_DIRECTORY = 'scss';
export const JS_DIRECTORY = 'js';

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

export const generateBarrelFile = (files: { fileName: string; content: string }[], hasJsOutput: boolean = false) => {
  return `${files
    .map((file) => {
      const fileExtension = hasJsOutput ? 'ts' : 'scss';
      const baseName = file.fileName.replace(/^_/, '').replace(new RegExp(`\\.${fileExtension}$`), '');

      return hasJsOutput ? `export * from './${baseName}';` : `@forward '${baseName}';`;
    })
    .join('\n')}\n`;
};
export const jsImportStatement = (name: string) => {
  return `import * as ${toCamelCase(name)} from './${THEMES_DIRECTORY}/${name}';`;
};

export const scssImportStatement = (name: string) => `@use '${THEMES_DIRECTORY}/${name}';`;

export const prepareImportStatementCallback = (hasJsOutput: boolean) => {
  return (theme: TokenTheme) => (hasJsOutput ? jsImportStatement(theme.name) : scssImportStatement(theme.name));
};

export const generateRootThemesFileImports = (themes: TokenTheme[], hasJsOutput: boolean): string => {
  return themes.map(prepareImportStatementCallback(hasJsOutput)).join('\n');
};

export const generateRootThemesFileContent = (themes: TokenTheme[], hasJsOutput: boolean): string => {
  return themes
    .map((theme) => {
      return hasJsOutput
        ? `${toCamelCase(theme.name)}: {\n${COLOR_KEY}: ${toCamelCase(theme.name)}.${COLOR_KEY}\n},`
        : `${theme.name}: (\n${COLOR_KEY}: ${theme.name}.$${COLOR_KEY},\n),`;
    })
    .join('\n');
};

export const generateThemesRootFile = (themes: TokenTheme[], hasJsOutput: boolean = false): string => {
  const imports = generateRootThemesFileImports(themes, hasJsOutput);
  const themesContent = generateRootThemesFileContent(themes, hasJsOutput);
  const defaultThemeNote = '// The first theme is the default theme, as the left column in the Figma table.';
  const stylesObjectWrapper = hasJsOutput ? 'export const themes = {\n' : '$themes: (\n';
  const content = `${imports}\n\n${defaultThemeNote}\n${stylesObjectWrapper}${themesContent}\n${hasJsOutput ? '};\n' : ');\n'}`;

  return indentAndFormat(content, hasJsOutput);
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
  const globalBarrelFile = generateBarrelFile(globalFiles);
  const globalJsBarrelFile = generateBarrelFile(globalJsFiles, true);
  outputFiles.push(
    ...globalFiles.map((file) => ({
      path: `./${SCSS_DIRECTORY}/${GLOBAL_DIRECTORY}`,
      fileName: `_${file.fileName}.scss`,
      content: file.content,
    })),
    ...globalJsFiles.map((file) => ({
      path: `./${JS_DIRECTORY}/${GLOBAL_DIRECTORY}/`,
      fileName: `${file.fileName}.ts`,
      content: file.content,
    })),
  );
  outputFiles.push({
    path: `./${SCSS_DIRECTORY}/${GLOBAL_DIRECTORY}/`,
    fileName: 'index.scss',
    content: globalBarrelFile,
  });
  outputFiles.push({
    path: `./${JS_DIRECTORY}/${GLOBAL_DIRECTORY}/`,
    fileName: 'index.ts',
    content: globalJsBarrelFile,
  });
  outputFiles.push({
    path: `./${SCSS_DIRECTORY}/`,
    fileName: '@global.scss',
    content: `@forward '${GLOBAL_DIRECTORY}';\n`,
  });
  outputFiles.push({
    path: `./${JS_DIRECTORY}/`,
    fileName: '@global.ts',
    content: `export * from './${GLOBAL_DIRECTORY}';\n`,
  });

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
    const themeBarrelFile = generateBarrelFile(themeFiles);
    const themeTsBarrelFile = generateBarrelFile(themeTsFiles, true);
    outputFiles.push(
      ...themeFiles.map((file) => ({
        path: `./${SCSS_DIRECTORY}/${THEMES_DIRECTORY}/${theme.name}/`,
        fileName: `_${file.fileName}.scss`,
        content: file.content,
      })),
      ...themeTsFiles.map((file) => ({
        path: `./${JS_DIRECTORY}/${THEMES_DIRECTORY}/${theme.name}/`,
        fileName: `${file.fileName}.ts`,
        content: file.content,
      })),
    );
    outputFiles.push({
      path: `./${SCSS_DIRECTORY}/${THEMES_DIRECTORY}/${theme.name}/`,
      fileName: 'index.scss',
      content: themeBarrelFile,
    });
    outputFiles.push({
      path: `./${JS_DIRECTORY}/${THEMES_DIRECTORY}/${theme.name}/`,
      fileName: 'index.ts',
      content: themeTsBarrelFile,
    });
  }

  // Generate root themes file
  const rootThemesFileContent = generateThemesRootFile(themes);
  const rootTsThemesFileContent = generateThemesRootFile(themes, true);
  outputFiles.push({ path: `./${SCSS_DIRECTORY}/`, fileName: '@themes.scss', content: rootThemesFileContent });
  outputFiles.push({ path: `./${JS_DIRECTORY}/`, fileName: '@themes.ts', content: rootTsThemesFileContent });

  return outputFiles;
};
