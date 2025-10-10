import { type spaces, type themes } from '@alma-oss/spirit-design-tokens';

export const BREAKPOINT_MOBILE = 'mobile';

export type SpaceToken = `space-${keyof typeof spaces}` | `space-${number}`;

type CamelCaseToKebabCaseHelper<S extends string> = S extends `${infer First}${infer Rest}`
  ? First extends Lowercase<First>
    ? `${First}${CamelCaseToKebabCaseHelper<Rest>}`
    : `-${Lowercase<First>}${CamelCaseToKebabCaseHelper<Rest>}`
  : '';

type CamelCaseToKebabCase<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${Lowercase<First>}${CamelCaseToKebabCaseHelper<Rest>}`
  : S;

export type ThemeName = keyof typeof themes;
export type ThemeNameType = CamelCaseToKebabCase<ThemeName>;
