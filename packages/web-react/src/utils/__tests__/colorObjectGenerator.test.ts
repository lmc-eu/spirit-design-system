import { generateColorsObject } from '../colorObjectGenerators';

describe('generateColorsObject', () => {
  it('returns a correctly formatted object for text colors', () => {
    const result = generateColorsObject(
      {
        '01': {
          backgroundBasic: 'accent01BackgroundBasic',
          backgroundSubtle: 'accent01BackgroundSubtle',
          contentBasic: 'accent01ContentBasic',
          contentSubtle: 'accent01ContentSubtle',
        },
        '02': {
          backgroundBasic: 'accent02BackgroundBasic',
          backgroundSubtle: 'accent02BackgroundSubtle',
          contentBasic: 'accent02ContentBasic',
          contentSubtle: 'accent02ContentSubtle',
        },
      },
      'content',
      'accent',
    );

    expect(result).toMatchObject({
      ACCENT_01_BASIC: 'accent-01-basic',
      ACCENT_01_SUBTLE: 'accent-01-subtle',
      ACCENT_02_BASIC: 'accent-02-basic',
      ACCENT_02_SUBTLE: 'accent-02-subtle',
    });
  });

  it('returns an empty object', () => {
    const result = generateColorsObject(
      {
        '01': {
          backgroundBasic: 'accent01BackgroundBasic',
          backgroundSubtle: 'accent01BackgroundSubtle',
        },
        '02': {
          backgroundBasic: 'accent02BackgroundBasic',
          backgroundSubtle: 'accent02BackgroundSubtle',
        },
      },
      'content',
      'accent',
    );

    expect(result).toMatchObject({});
  });
});
