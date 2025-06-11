import { CSSProperties, ElementType } from 'react';
import { SpacingStyleProp } from '../../constants';
import { TextAlignmentDictionaryType } from './dictionaries';
import { BreakpointToken, SpaceToken } from './tokens';

export const STYLE_SPACING_AUTO = 'auto' as const;
export type StyleSpacingAuto = typeof STYLE_SPACING_AUTO;

export type SpacingProps = {
  [key in keyof typeof SpacingStyleProp]?:
    | SpaceToken
    | StyleSpacingAuto
    | Partial<Record<BreakpointToken, SpaceToken | StyleSpacingAuto>>;
};

export type SpacingType = SpaceToken | Partial<Record<BreakpointToken, SpaceToken>>;

export interface SpacingProp {
  spacing?: SpacingType;
}

export interface SpacingCSSProperties extends CSSProperties {
  [index: `--${string}`]: string | undefined | number;
}

export type DimensionType = number | Partial<Record<BreakpointToken, number>>;

export type ElementTypeProp = string | ElementType;

export interface StyleProps extends SpacingProps {
  // For backward compatibility!
  /** Sets the CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. Only use as a **last resort**. Use style props instead. */
  UNSAFE_className?: string;
  /** Sets inline [style](https://developer.mozilla.org/en-US/docs/Web/API/Element/style) for the element. Only use as a **last resort**. Use style props instead. */
  UNSAFE_style?: CSSProperties;
}

export type TextAlignmentType = TextAlignmentDictionaryType | Record<BreakpointToken, TextAlignmentDictionaryType>;

export type UnsafeStyleProps = 'style' | 'className';

export type OmittedExtendedUnsafeStyleProps<E, P> = Omit<E, UnsafeStyleProps & P>;

export type OverloadStyleProps<E> = Omit<E, UnsafeStyleProps> & StyleProps;
