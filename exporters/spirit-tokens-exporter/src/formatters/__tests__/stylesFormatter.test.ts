import fs from 'fs';
import path from 'path';
import { indentAndFormat } from '../stylesFormatter';

const mockedUnformattedCSS = fs.readFileSync(
  path.join(__dirname, '../../../src/formatters/__fixtures__/unformattedExample.scss'),
  'utf-8',
);

const mockedFormattedCSS = fs.readFileSync(
  path.join(__dirname, '../../../src/formatters/__fixtures__/formattedExample.scss'),
  'utf-8',
);

const mockedFormattedJS = fs.readFileSync(
  path.join(__dirname, '../../../src/formatters/__fixtures__/formattedExample.ts'),
  'utf-8',
);

const mockedUnformattedJS = fs.readFileSync(
  path.join(__dirname, '../../../src/formatters/__fixtures__/unformattedExample.ts'),
  'utf-8',
);

describe('indentAndFormat', () => {
  it('should correctly indent and format CSS output', () => {
    expect(indentAndFormat(mockedUnformattedCSS, false)).toBe(mockedFormattedCSS);
  });

  it('should correctly indent and format JS output', () => {
    expect(indentAndFormat(mockedUnformattedJS, true)).toBe(mockedFormattedJS);
  });
});
