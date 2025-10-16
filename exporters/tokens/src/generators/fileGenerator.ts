import { DimensionToken, Supernova, Token, TokenGroup, TokenTheme, TokenType } from '@supernovaio/sdk-exporters';
import {
  commonThemedFilesData,
  devicesFilesData,
  FileData,
  nonThemedFilesData,
  themedFilesData,
} from '../config/fileConfig';
import { DEVICES_DIRECTORY, GLOBAL_DIRECTORY, JS_DIRECTORY, SCSS_DIRECTORY, THEMES_DIRECTORY } from '../constants';
import { indentAndFormat } from '../formatters/stylesFormatter';
import {
  filterDeviceCollections,
  filterGlobalCollections,
  filterThemesByCollection,
  getCollectionId,
} from '../helpers/collectionsHelper';
import { filterColorCollections } from '../helpers/colorHelper';
import { getDeviceAlias, getDeviceThemes } from '../helpers/deviceHelpers';
import { toCamelCase } from '../helpers/stringHelper';
import { generateFileContent } from './contentGenerator';
import { DeviceDimensionEntries, DeviceDimensionMap } from './stylesObjectGenerator';

const buildDeviceDimensionMap = (tokens: Token[]): DeviceDimensionMap => {
  return tokens.reduce<DeviceDimensionMap>((accumulator, token) => {
    if (token.tokenType !== TokenType.dimension) {
      return accumulator;
    }

    const device = getDeviceAlias(token).toLowerCase();

    if (!device) {
      return accumulator;
    }

    const dimensionToken = token as DimensionToken;
    const { measure, unit } = dimensionToken.value;

    if (typeof measure !== 'number' || !unit) {
      return accumulator;
    }

    const deviceValues: DeviceDimensionEntries = accumulator.get(token.id) || {};
    deviceValues[device] = {
      measure,
      unit,
    };

    accumulator.set(token.id, deviceValues);

    return accumulator;
  }, new Map<string, DeviceDimensionEntries>());
};

export const generateFiles = (
  tokens: Array<Token>,
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
  filesData: FileData[],
  deviceDimensions?: DeviceDimensionMap,
  hasJsOutput: boolean = false,
) => {
  return filesData.map((fileData) => {
    const fileContent = generateFileContent(tokens, mappedTokens, tokenGroups, fileData, hasJsOutput, deviceDimensions);
    const fileName = hasJsOutput ? toCamelCase(fileData.fileName) : fileData.fileName;

    return {
      fileName,
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
  const filteredDeviceCollections = filterDeviceCollections(tokens);
  const filteredGlobalCollections = filterGlobalCollections(tokens);
  const deviceCollectionId = getCollectionId(filteredDeviceCollections);

  // themes from color collections and omits device themes
  const filteredThemes = filterThemesByCollection(themes, deviceCollectionId, true);

  // themes from device collections
  const filteredDevices = filterThemesByCollection(themes, deviceCollectionId, false);

  // Compute themed tokens for all themes in parallel
  const allThemes = await Promise.all(
    filteredThemes.map(async (theme) => {
      const themedTokens = sdk.tokens.computeTokensByApplyingThemes(tokens, filteredColorCollections, [theme]);

      return { themedTokens, theme };
    }),
  );

  // Compute themed tokens for all devices in parallel
  const allDevices = await Promise.all(
    filteredDevices.map(async (theme) => {
      const deviceTokens = sdk.tokens.computeTokensByApplyingThemes(tokens, filteredDeviceCollections, [theme]);

      return { deviceTokens, theme };
    }),
  );

  const deviceTokens: Token[] = getDeviceThemes(allDevices);
  const deviceDimensions = buildDeviceDimensionMap(deviceTokens);

  // Generate global files for non-themed tokens
  const globalFiles = generateFiles(
    filteredGlobalCollections,
    mappedTokens,
    tokenGroups,
    nonThemedFilesData,
    deviceDimensions,
    false,
  );
  const globalJsFiles = generateFiles(
    filteredGlobalCollections,
    mappedTokens,
    tokenGroups,
    nonThemedFilesData,
    deviceDimensions,
    true,
  );
  const globalBarrelFile = generateBarrelFile(globalFiles);
  const globalJsBarrelFile = generateBarrelFile(globalJsFiles, true);
  const forwardDevices = deviceTokens.length > 0 ? `@forward '${DEVICES_DIRECTORY}';\n` : '';
  const exportDevices = deviceTokens.length > 0 ? `export * from './${DEVICES_DIRECTORY}';\n` : '';

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
    content: `${forwardDevices}@forward '${GLOBAL_DIRECTORY}';\n@forward '${THEMES_DIRECTORY}';\n`,
  });
  outputFiles.push({
    path: `./${JS_DIRECTORY}/`,
    fileName: 'index.ts',
    content: `${exportDevices}export * from './${GLOBAL_DIRECTORY}';\nexport * from './${THEMES_DIRECTORY}';\n`,
  });

  // Generate files for each theme
  for (const { themedTokens, theme } of allThemes) {
    const themeFiles = generateFiles(themedTokens, mappedTokens, tokenGroups, themedFilesData, deviceDimensions, false);
    const themeTsFiles = generateFiles(
      themedTokens,
      mappedTokens,
      tokenGroups,
      themedFilesData,
      deviceDimensions,
      true,
    );
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
  const rootThemesFileContent = generateThemesRootFile(filteredThemes);
  const rootTsThemesFileContent = generateThemesRootFile(filteredThemes, true);
  const rootScssThemesFile = "@forward 'color-tokens';\n";
  const rootJsThemesFile = "export * from './colorTokens';\n";
  const colorTokensFile = generateFiles(
    filteredColorCollections,
    mappedTokens,
    tokenGroups,
    commonThemedFilesData,
    deviceDimensions,
    false,
  );
  const colorTsTokensFile = generateFiles(
    filteredColorCollections,
    mappedTokens,
    tokenGroups,
    commonThemedFilesData,
    deviceDimensions,
    true,
  );

  outputFiles.push({ path: `./${SCSS_DIRECTORY}/`, fileName: '@themes.scss', content: rootThemesFileContent });
  outputFiles.push({
    path: `./${JS_DIRECTORY}/${THEMES_DIRECTORY}`,
    fileName: 'index.ts',
    content: `${rootTsThemesFileContent}\n${rootJsThemesFile}`,
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
  outputFiles.push(
    ...colorTsTokensFile.map((file) => ({
      path: `./${JS_DIRECTORY}/${THEMES_DIRECTORY}`,
      fileName: `${file.fileName}.ts`,
      content: file.content,
    })),
  );

  // Generate a file for device collection
  if (deviceTokens.length > 0) {
    const deviceFile = generateFiles(
      deviceTokens,
      mappedTokens,
      tokenGroups,
      devicesFilesData,
      deviceDimensions,
      false,
    );
    const deviceTsFile = generateFiles(
      deviceTokens,
      mappedTokens,
      tokenGroups,
      devicesFilesData,
      deviceDimensions,
      true,
    );
    const deviceBarrelFile = generateBarrelFile(deviceFile);
    const deviceTsBarrelFile = generateBarrelFile(deviceTsFile, true);

    outputFiles.push(
      ...deviceFile.map((file) => ({
        path: `./${SCSS_DIRECTORY}/${DEVICES_DIRECTORY}/`,
        fileName: `_${file.fileName}.scss`,
        content: file.content,
      })),
      ...deviceTsFile.map((file) => ({
        path: `./${JS_DIRECTORY}/${DEVICES_DIRECTORY}/`,
        fileName: `${file.fileName}.ts`,
        content: file.content,
      })),
    );
    outputFiles.push({
      path: `./${SCSS_DIRECTORY}/${DEVICES_DIRECTORY}/`,
      fileName: 'index.scss',
      content: deviceBarrelFile,
    });
    outputFiles.push({
      path: `./${JS_DIRECTORY}/${DEVICES_DIRECTORY}/`,
      fileName: 'index.ts',
      content: deviceTsBarrelFile,
    });
  }

  return outputFiles;
};
