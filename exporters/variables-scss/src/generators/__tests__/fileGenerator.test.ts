import fs from 'fs';
import path from 'path';
import { Supernova, Token, TokenGroup, TokenTheme } from '@supernovaio/sdk-exporters';
import {
  generateFiles,
  generateBarrelFile,
  generateOutputFilesByThemes,
  generateRootThemesFileContent,
  generateRootThemesFileImports,
  generateThemesRootFile,
  jsImportStatement,
  scssImportStatement,
} from '../fileGenerator';
import { exampleDimensionAndStringTokens } from '../../../tests/fixtures/exampleDimensionAndStringTokens';
import { nonThemedFilesData } from '../../config/fileConfig';
import { exampleGroups } from '../../../tests/fixtures/exampleGroups';

const mockedExpectedResult = fs.readFileSync(
  path.join(__dirname, '../../../tests/fixtures/exampleFileContent.scss'),
  'utf-8',
);
const mappedTokens: Map<string, Token> = new Map([]);
const tokenGroups: Array<TokenGroup> = exampleGroups;
const emptyFile = `/* This file was generated by Supernova, don't change manually */\n\n`;
const barrelFile = fs.readFileSync(path.join(__dirname, '../__fixtures__/barrelFileMock.scss'), 'utf-8');
const barrelColorFile = `@forward 'colors';\n`;
const barrelJsFile = `export * from './borders';
export * from './other';
export * from './radii';
export * from './spacing';
export * from './shadows';
export * from './gradients';
export * from './typography';
`;
const barrelJsColorFile = `export * from './colors';\n`;

const mockedTsFile = `/* This file was generated by Supernova, don't change manually */
export const gridSpacingDesktop = '32px';\n
export const gridColumns = '12';\n
export const grids = {
  spacing: {
    desktop: gridSpacingDesktop,
  },
  columns: gridColumns,
};\n`;

const mockedRootThemeFile = fs.readFileSync(path.join(__dirname, '../__fixtures__/mockedRootThemeFile.scss'), 'utf-8');

const mockedRootThemeJsFile = `import * as themeLight from './themes/theme-light';
import * as themeLightInverted from './themes/theme-light-inverted';\n
// The first theme is the default theme, as the left column in the Figma table.
export const themes = {
  themeLight: {
    colors: themeLight.colors
  },
  themeLightInverted: {
    colors: themeLightInverted.colors
  },
};
`;

describe('fileGenerator', () => {
  describe('generateOutputFilesByThemes', () => {
    it('should generate output files by themes', async () => {
      const tokens = Array.from(exampleDimensionAndStringTokens.values());
      const sdk = {
        tokens: {
          computeTokensByApplyingThemes: jest.fn().mockResolvedValue(tokens),
        },
      };
      const themes = [{ name: 'theme-light' }, { name: 'theme-light-inverted' }];
      const outputFiles = await generateOutputFilesByThemes(
        tokens,
        mappedTokens,
        tokenGroups,
        themes as TokenTheme[],
        sdk as unknown as Supernova,
      );

      expect(outputFiles).toStrictEqual([
        // Global files
        { path: './scss/global', fileName: '_borders.scss', content: emptyFile },
        { path: './scss/global', fileName: '_other.scss', content: mockedExpectedResult },
        { path: './scss/global', fileName: '_radii.scss', content: emptyFile },
        { path: './scss/global', fileName: '_spacing.scss', content: emptyFile },
        { path: './scss/global', fileName: '_shadows.scss', content: emptyFile },
        { path: './scss/global', fileName: '_gradients.scss', content: emptyFile },
        { path: './scss/global', fileName: '_typography.scss', content: emptyFile },
        { path: './js/global/', fileName: 'borders.ts', content: emptyFile },
        { path: './js/global/', fileName: 'other.ts', content: mockedTsFile },
        { path: './js/global/', fileName: 'radii.ts', content: emptyFile },
        { path: './js/global/', fileName: 'spacing.ts', content: emptyFile },
        { path: './js/global/', fileName: 'shadows.ts', content: emptyFile },
        { path: './js/global/', fileName: 'gradients.ts', content: emptyFile },
        { path: './js/global/', fileName: 'typography.ts', content: emptyFile },
        // Global barrel files
        { path: './scss/global/', fileName: 'index.scss', content: barrelFile },
        { path: './js/global/', fileName: 'index.ts', content: barrelJsFile },
        // Root barrel files
        { path: './scss/', fileName: '@global.scss', content: `@forward 'global';\n` },
        { path: './js/', fileName: '@global.ts', content: `export * from './global';\n` },
        // Themes files
        { path: './scss/themes/theme-light/', fileName: '_colors.scss', content: emptyFile },
        { path: './js/themes/theme-light/', fileName: 'colors.ts', content: emptyFile },
        { path: './scss/themes/theme-light/', fileName: 'index.scss', content: barrelColorFile },
        { path: './js/themes/theme-light/', fileName: 'index.ts', content: barrelJsColorFile },
        { path: './scss/themes/theme-light-inverted/', fileName: '_colors.scss', content: emptyFile },
        { path: './js/themes/theme-light-inverted/', fileName: 'colors.ts', content: emptyFile },
        { path: './scss/themes/theme-light-inverted/', fileName: 'index.scss', content: barrelColorFile },
        { path: './js/themes/theme-light-inverted/', fileName: 'index.ts', content: barrelJsColorFile },
        // Themes root barrel files
        { path: './scss/', fileName: '@themes.scss', content: mockedRootThemeFile },
        { path: './js/', fileName: '@themes.ts', content: mockedRootThemeJsFile },
      ]);
    });
  });

  describe('generateFiles', () => {
    it('should generate files', () => {
      const tokens = Array.from(exampleDimensionAndStringTokens.values());
      const files = generateFiles(tokens, mappedTokens, tokenGroups, nonThemedFilesData, false);

      expect(files).toStrictEqual([
        {
          fileName: 'borders',
          content: emptyFile,
        },
        { fileName: 'other', content: mockedExpectedResult },
        { fileName: 'radii', content: emptyFile },
        { fileName: 'spacing', content: emptyFile },
        { fileName: 'shadows', content: emptyFile },
        { fileName: 'gradients', content: emptyFile },
        { fileName: 'typography', content: emptyFile },
      ]);
    });
  });

  describe('generateBarrelFile', () => {
    const dataProvider = [
      {
        files: [{ fileName: 'borders', content: emptyFile }],
        description: 'should generate barrel file with one file',
        expectedBarrelFile: `@forward 'borders';\n`,
      },
      {
        files: [
          { fileName: 'borders', content: emptyFile },
          { fileName: 'other', content: mockedExpectedResult },
        ],
        description: 'should generate barrel file with multiple files',
        expectedBarrelFile: `@forward 'borders';\n@forward 'other';\n`,
      },
      {
        files: [
          { fileName: 'borders', content: emptyFile },
          { fileName: 'other', content: mockedExpectedResult },
        ],
        description: 'should generate barrel file with one file with js output',
        hasJsOutput: true,
        expectedBarrelFile: `export * from './borders';\nexport * from './other';\n`,
      },
    ];

    it.each(dataProvider)('$description', ({ files, expectedBarrelFile, hasJsOutput }) => {
      const mockedBarrelFile = generateBarrelFile(files, hasJsOutput);

      expect(mockedBarrelFile).toBe(expectedBarrelFile);
    });
  });

  describe('generateThemesRootFile', () => {
    it('should generate themes root file content', () => {
      const themes = [{ name: 'theme-light' }, { name: 'theme-light-inverted' }];
      const content = generateThemesRootFile(themes as TokenTheme[], false);

      expect(content).toBe(mockedRootThemeFile);
    });

    it('should generate themes root file content with js output', () => {
      const themes = [{ name: 'theme-light' }, { name: 'theme-light-inverted' }];
      const content = generateThemesRootFile(themes as TokenTheme[], true);

      expect(content).toBe(mockedRootThemeJsFile);
    });
  });

  describe('generateRootThemesFileContent', () => {
    it('should generate root themes file content', () => {
      const themes = [{ name: 'theme-light' }, { name: 'theme-light-inverted' }];
      const content = generateRootThemesFileContent(themes as TokenTheme[], false);

      expect(content).toBe(
        `theme-light: (\ncolors: theme-light.$colors,\n),\ntheme-light-inverted: (\ncolors: theme-light-inverted.$colors,\n),`,
      );
    });

    it('should generate root themes file content with js output', () => {
      const themes = [{ name: 'theme-light' }, { name: 'theme-light-inverted' }];
      const content = generateRootThemesFileContent(themes as TokenTheme[], true);

      expect(content).toBe(
        `themeLight: {\ncolors: themeLight.colors\n},\nthemeLightInverted: {\ncolors: themeLightInverted.colors\n},`,
      );
    });
  });

  describe('generateRootThemesFileImports', () => {
    it('should generate root themes file imports', () => {
      const themes = [{ name: 'theme-light' }, { name: 'theme-light-inverted' }];
      const content = generateRootThemesFileImports(themes as TokenTheme[], false);

      expect(content).toBe(`@use 'themes/theme-light';\n@use 'themes/theme-light-inverted';`);
    });

    it('should generate root themes file imports with js output', () => {
      const themes = [{ name: 'theme-light' }, { name: 'theme-light-inverted' }];
      const content = generateRootThemesFileImports(themes as TokenTheme[], true);

      expect(content).toBe(
        `import * as themeLight from './themes/theme-light';\nimport * as themeLightInverted from './themes/theme-light-inverted';`,
      );
    });
  });

  describe('jsImportStatement', () => {
    it('should generate js import statement', () => {
      const content = jsImportStatement('theme-light');

      expect(content).toBe(`import * as themeLight from './themes/theme-light';`);
    });
  });

  describe('scssImportStatement', () => {
    it('should generate scss import statement', () => {
      const content = scssImportStatement('theme-light');

      expect(content).toBe(`@use 'themes/theme-light';`);
    });
  });
});
