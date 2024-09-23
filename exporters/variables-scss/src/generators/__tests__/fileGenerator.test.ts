import fs from 'fs';
import path from 'path';
import { Supernova, Token, TokenGroup, TokenTheme } from '@supernovaio/sdk-exporters';
import {
  generateFiles,
  generateIndexFile,
  generateOutputFilesByThemes,
  generateRootThemesFileContent,
  generateRootThemesFileImports,
  generateThemesRootFile,
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
const indexFile = `@forward 'borders';
@forward 'other';
@forward 'radii';
@forward 'spacing';
@forward 'shadows';
@forward 'gradients';
@forward 'typography';
`;
const indexColorFile = `@forward 'colors';\n`;
const indexJsFile = `export * from './borders';
export * from './other';
export * from './radii';
export * from './spacing';
export * from './shadows';
export * from './gradients';
export * from './typography';
`;
const indexJsColorFile = `export * from './colors';\n`;

const mockedTsFile = `/* This file was generated by Supernova, don't change manually */
export const gridSpacingDesktop = '32px';\n
export const gridColumns = '12';\n
export const grids = {
\tspacing: {
\t\tdesktop: gridSpacingDesktop,
\t},
\tcolumns: gridColumns,
};\n`;

const mockedRootThemeFile = `@use 'themes/theme-light';
@use 'themes/theme-light-inverted';

$themes: (
    theme-light: (
        colors: theme-light.$colors,
    ),
    theme-light-inverted: (
        colors: theme-light-inverted.$colors,
    ),
);
`;

const mockedRootThemeJsFile = `import * as themeLight from './themes/theme-light';
import * as themeLightInverted from './themes/theme-light-inverted';\n
export const themes = {
\tthemeLight: {
\t\tcolors: themeLight.colors
\t},
\tthemeLightInverted: {
\t\tcolors: themeLightInverted.colors
\t},
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
        // Global index files
        { path: './scss/global/', fileName: 'index.scss', content: indexFile },
        { path: './js/global/', fileName: 'index.ts', content: indexJsFile },
        // Root index files
        { path: './scss/', fileName: '@global.scss', content: `@forward 'global';` },
        { path: './js/', fileName: '@global.ts', content: `export * from './global';` },
        // Themes files
        { path: './scss/themes/theme-light/', fileName: '_colors.scss', content: emptyFile },
        { path: './js/themes/theme-light/', fileName: 'colors.ts', content: emptyFile },
        { path: './scss/themes/theme-light/', fileName: 'index.scss', content: indexColorFile },
        { path: './js/themes/theme-light/', fileName: 'index.ts', content: indexJsColorFile },
        { path: './scss/themes/theme-light-inverted/', fileName: '_colors.scss', content: emptyFile },
        { path: './js/themes/theme-light-inverted/', fileName: 'colors.ts', content: emptyFile },
        { path: './scss/themes/theme-light-inverted/', fileName: 'index.scss', content: indexColorFile },
        { path: './js/themes/theme-light-inverted/', fileName: 'index.ts', content: indexJsColorFile },
        // Themes root index files
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

  describe('generateIndexFile', () => {
    const dataProvider = [
      {
        files: [{ fileName: 'borders', content: emptyFile }],
        expectedIndexFile: `@forward 'borders';\n`,
        description: 'should generate index file with one file',
      },
      {
        files: [
          { fileName: 'borders', content: emptyFile },
          { fileName: 'other', content: mockedExpectedResult },
        ],
        expectedIndexFile: `@forward 'borders';\n@forward 'other';\n`,
        description: 'should generate index file with multiple files',
      },
      {
        files: [
          { fileName: 'borders', content: emptyFile },
          { fileName: 'other', content: mockedExpectedResult },
        ],
        expectedIndexFile: `export * from './borders';\nexport * from './other';\n`,
        hasJsOutput: true,
        description: 'should generate index file with one file with js output',
      },
    ];

    it.each(dataProvider)('$description', ({ files, expectedIndexFile, hasJsOutput }) => {
      const mockedIndexFile = generateIndexFile(files, hasJsOutput);

      expect(mockedIndexFile).toBe(expectedIndexFile);
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
});
