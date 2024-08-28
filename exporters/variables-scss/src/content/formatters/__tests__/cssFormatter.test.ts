import { formatCSS } from '../cssFormatter';

const mockedCSS = `$my-var: (
color: #000,
background: #fff,
border: 1px solid #000
) !default;`;

const mockedFormattedCSS = `$my-var: (
    color: #000,
    background: #fff,
    border: 1px solid #000
) !default;\n`;

describe('formatCSS', () => {
  it('should correctly format CSS string', () => {
    expect(formatCSS(mockedCSS)).toBe(mockedFormattedCSS);
  });
});
