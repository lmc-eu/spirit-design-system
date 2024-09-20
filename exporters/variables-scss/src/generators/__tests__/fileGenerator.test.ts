import fs from 'fs';
import path from 'path';
import { Supernova, Token, TokenGroup, TokenTheme } from '@supernovaio/sdk-exporters';
import { generateFiles, generateOutputFilesByThemes } from '../fileGenerator';
import { exampleMockedGroups, exampleMockedTokens } from '../../../tests/fixtures/mockedExampleTokens';
import { nonThemedFilesData } from '../../config/fileConfig';

const mockedExpectedResult = fs.readFileSync(
  path.join(__dirname, '../../../tests/fixtures/exampleFileContent.scss'),
  'utf-8',
);
const mappedTokens: Map<string, Token> = new Map([]);
const tokenGroups: Array<TokenGroup> = exampleMockedGroups;
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
export const gridSpacingDesktop = '32px;'\n
export const gridColumns = '12;'\n
export const grids = {
spacing: {
desktop: gridSpacingDesktop,
},
columns: gridColumns,
};\n`;

describe('fileGenerator', () => {
  describe('generateOutputFilesByThemes', () => {
    it('should generate output files by themes', async () => {
      const tokens = Array.from(exampleMockedTokens.values());
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
        { path: './scss/globals', fileName: '_borders.scss', content: emptyFile },
        { path: './scss/globals', fileName: '_other.scss', content: mockedExpectedResult },
        { path: './scss/globals', fileName: '_radii.scss', content: emptyFile },
        { path: './scss/globals', fileName: '_spacing.scss', content: emptyFile },
        { path: './scss/globals', fileName: '_shadows.scss', content: emptyFile },
        { path: './scss/globals', fileName: '_gradients.scss', content: emptyFile },
        { path: './scss/globals', fileName: '_typography.scss', content: emptyFile },
        { path: './js/globals/', fileName: 'borders.ts', content: emptyFile },
        { path: './js/globals/', fileName: 'other.ts', content: mockedTsFile },
        { path: './js/globals/', fileName: 'radii.ts', content: emptyFile },
        { path: './js/globals/', fileName: 'spacing.ts', content: emptyFile },
        { path: './js/globals/', fileName: 'shadows.ts', content: emptyFile },
        { path: './js/globals/', fileName: 'gradients.ts', content: emptyFile },
        { path: './js/globals/', fileName: 'typography.ts', content: emptyFile },
        // Global index files
        { path: './scss/globals/', fileName: 'index.scss', content: indexFile },
        { path: './js/globals/', fileName: 'index.ts', content: indexJsFile },
        // Themes files
        { path: './scss/themes/theme-light/', fileName: '_colors.scss', content: emptyFile },
        { path: './js/themes/theme-light/', fileName: 'colors.ts', content: emptyFile },
        { path: './scss/themes/theme-light/', fileName: 'index.scss', content: indexColorFile },
        { path: './js/themes/theme-light/', fileName: 'index.ts', content: indexJsColorFile },
        { path: './scss/themes/theme-light-inverted/', fileName: '_colors.scss', content: emptyFile },
        { path: './js/themes/theme-light-inverted/', fileName: 'colors.ts', content: emptyFile },
        { path: './scss/themes/theme-light-inverted/', fileName: 'index.scss', content: indexColorFile },
        { path: './js/themes/theme-light-inverted/', fileName: 'index.ts', content: indexJsColorFile },
      ]);
    });
  });

  describe('generateFiles', () => {
    it('should generate files', () => {
      const tokens = Array.from(exampleMockedTokens.values());
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
});
