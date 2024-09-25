import fs from 'fs';
import path from 'path';
import { indentAndFormat } from '../stylesFormatter';

const mockedUnformattedCSS = fs.readFileSync(
  path.join(__dirname, '../../../tests/fixtures/unformattedExample.scss'),
  'utf-8',
);

const mockedFormattedCSS = fs.readFileSync(
  path.join(__dirname, '../../../tests/fixtures/formattedExample.scss'),
  'utf-8',
);

const mockedUnformattedJS = `
export const gridSpacingDesktop: '32px';

export const gridColumns = '12';

export const grids = {
spacing: {
desktop: gridSpacingDesktop,
},
columns: gridColumns,
};
`;

const expectedJsOutput = `
export const gridSpacingDesktop: '32px';

export const gridColumns = '12';

export const grids = {
  spacing: {
    desktop: gridSpacingDesktop,
  },
  columns: gridColumns,
};
`;

describe('indentAndFormat', () => {
  it('should correctly indent and format CSS output', () => {
    expect(indentAndFormat(mockedUnformattedCSS, false)).toBe(mockedFormattedCSS);
  });

  it('should correctly indent and format JS output', () => {
    expect(indentAndFormat(mockedUnformattedJS, true)).toBe(expectedJsOutput);
  });
});
