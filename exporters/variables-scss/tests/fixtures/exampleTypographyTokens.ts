import { Token, TokenType, TypographyToken } from '@supernovaio/sdk-exporters';

export const exampleTypographyTokens = new Map<string, Token>();
exampleTypographyTokens.set('typographyRef1', {
  id: 'typographyRef1',
  name: 'Bold',
  tokenType: TokenType.typography,
  parentGroupId: '6',
  origin: {
    name: 'Heading/Desktop/XLarge/Bold',
  },
  value: {
    fontSize: { unit: 'Pixels', measure: 64 },
    lineHeight: { measure: 120 },
    fontFamily: { text: 'Inter' },
    fontWeight: { text: '700' },
  },
} as TypographyToken);
exampleTypographyTokens.set('typographyRef2', {
  id: 'typographyRef2',
  name: 'Bold-Underline',
  tokenType: TokenType.typography,
  parentGroupId: '7',
  origin: {
    name: 'Heading/Desktop/XLarge/Bold-Underline',
  },
  value: {
    fontSize: { unit: 'Pixels', measure: 64 },
    lineHeight: { measure: 120 },
    fontFamily: { text: 'Inter' },
    fontWeight: { text: '700' },
  },
} as TypographyToken);

export const expectedTypographyValue = `(
font-family: 'Inter', sans-serif,
font-size: 64px,
font-style: italic,
font-weight: 700,
line-height: 1.2,
)`;
