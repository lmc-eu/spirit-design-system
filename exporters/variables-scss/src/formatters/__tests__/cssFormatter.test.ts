import fs from 'fs';
import path from 'path';
import { formatCSS } from '../cssFormatter';

const mockedUnformattedCSS = fs.readFileSync(
  path.join(__dirname, '../../../tests/fixtures/unformattedExample.scss'),
  'utf-8',
);

const mockedFormattedCSS = fs.readFileSync(
  path.join(__dirname, '../../../tests/fixtures/formattedExample.scss'),
  'utf-8',
);

describe('formatCSS', () => {
  it('should correctly format CSS string', () => {
    expect(formatCSS(mockedUnformattedCSS)).toBe(mockedFormattedCSS);
  });
});
