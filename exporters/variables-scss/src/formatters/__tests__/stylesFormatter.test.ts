import fs from 'fs';
import path from 'path';
import { formatStyles } from '../stylesFormatter';

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
\tspacing: {
\t\tdesktop: gridSpacingDesktop,
\t},
\tcolumns: gridColumns,
};
`;

describe('formatStyles', () => {
  it('should correctly format CSS string', () => {
    expect(formatStyles(mockedUnformattedCSS, false)).toBe(mockedFormattedCSS);
  });

  it('should correctly format CSS string with JS output', () => {
    expect(formatStyles(mockedUnformattedJS, true)).toBe(expectedJsOutput);
  });
});
