import { printTypes } from '../types';

describe('printTypes', () => {
  it.each([
    // types, name, expected
    [
      { x: ['arnold'], y: ['rimmer'] },
      'someName',
      `
export const x = {
    arnold: xArnold,
};

export const y = {
    rimmer: yRimmer,
};

export const someName = {
    x,
    y,
};
`,
    ],
  ])('should print types', (types, name, expected) => {
    expect(printTypes(types, name)).toBe(expected);
  });
});
