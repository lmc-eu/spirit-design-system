import { Supernova, Token, TokenGroup, TokenTheme } from '@supernovaio/sdk-exporters';
import { commonThemedFilesData, FileData, nonThemedFilesData, themedFilesData } from '../config/fileConfig';
import { GLOBAL_DIRECTORY, JS_DIRECTORY, SCSS_DIRECTORY, THEMES_DIRECTORY } from '../constants';
import { indentAndFormat } from '../formatters/stylesFormatter';
import { filterColorCollections } from '../helpers/colorHelper';
import { toCamelCase } from '../helpers/stringHelper';
import { generateFileContent } from './contentGenerator';

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
    .sort()
    .join('\n')}\n`;
};
export const jsImportStatement = (name: string) => {
  return `import * as ${toCamelCase(name)} from './${name}';`;
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
      const variables = `variables: meta.module-variables(${theme.name}),\n`;
      const mixins = `mixins: meta.module-mixins(${theme.name}),\n`;

      return hasJsOutput
        ? `${toCamelCase(theme.name)}: {\ntokens: ${toCamelCase(theme.name)},\n},`
        : `${theme.name}: (\n${variables}${mixins}),`;
    })
    .join('\n');
};

export const generateThemesRootFile = (themes: TokenTheme[], hasJsOutput: boolean = false): string => {
  const imports = generateRootThemesFileImports(themes, hasJsOutput);
  const themesContent = generateRootThemesFileContent(themes, hasJsOutput);
  const defaultThemeNote = '// The first theme is the default theme, as the left column in the Figma table.';
  const stylesObjectWrapper = hasJsOutput ? 'export const themes = {\n' : '$themes: (\n';
  const sassMetaImport = hasJsOutput ? '' : "@use 'sass:meta';\n";
  const content = `${sassMetaImport}${imports}\n\n${defaultThemeNote}\n${stylesObjectWrapper}${themesContent}\n${hasJsOutput ? '};\n' : ');\n'}`;

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
  const filteredColorCollections = filterColorCollections(tokens);

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
    fileName: '@tokens.scss',
    content: `@forward '${GLOBAL_DIRECTORY}';\n@forward '${THEMES_DIRECTORY}';\n`,
  });
  outputFiles.push({
    path: `./${JS_DIRECTORY}/`,
    fileName: 'index.ts',
    content: `export * from './${GLOBAL_DIRECTORY}';\nexport * from './${THEMES_DIRECTORY}';\n`,
  });

  // Compute themed tokens for all themes in parallel
  const allThemes = await Promise.all(
    themes.map(async (theme) => {
      const themedTokens = sdk.tokens.computeTokensByApplyingThemes(tokens, filteredColorCollections, [theme]);

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
  const rootScssThemesFile = "@forward 'color-tokens';\n";
  const colorTokensFile = generateFiles(
    filteredColorCollections,
    mappedTokens,
    tokenGroups,
    commonThemedFilesData,
    false,
  );
  outputFiles.push({ path: `./${SCSS_DIRECTORY}/`, fileName: '@themes.scss', content: rootThemesFileContent });
  outputFiles.push({
    path: `./${JS_DIRECTORY}/${THEMES_DIRECTORY}`,
    fileName: 'index.ts',
    content: rootTsThemesFileContent,
  });
  outputFiles.push({
    path: `./${SCSS_DIRECTORY}/${THEMES_DIRECTORY}`,
    fileName: 'index.scss',
    content: rootScssThemesFile,
  });
  outputFiles.push(
    ...colorTokensFile.map((file) => ({
      path: `./${SCSS_DIRECTORY}/${THEMES_DIRECTORY}`,
      fileName: `_${file.fileName}.scss`,
      content: file.content,
    })),
  );

  return outputFiles;
};
