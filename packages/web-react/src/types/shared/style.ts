import { CSSProperties, ElementType } from 'react';
import { SpacingStyleProp } from '../../constants';
import { BreakpointToken, SpaceToken } from './tokens';

export const STYLE_SPACING_AUTO = 'auto' as const;
export type StyleSpacingAuto = typeof STYLE_SPACING_AUTO;

export type SpacingProps = {
  [key in keyof typeof SpacingStyleProp]?:
    | SpaceToken
    | StyleSpacingAuto
    | Partial<Record<BreakpointToken, SpaceToken | StyleSpacingAuto>>;
};

export interface SpacingProp {
  spacing?: SpaceToken | Partial<Record<BreakpointToken, SpaceToken>>;
}

export interface SpacingCSSProperties extends CSSProperties {
  [index: `--${string}`]: string | undefined | number;
}

export type ElementTypeProp = string | ElementType;

export interface StyleProps extends SpacingProps {
  ElementTag?: ElementTypeProp;
  transferClassName?: string;
  // For backward compatibility!
  /** Sets the CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. Only use as a **last resort**. Use style props instead. */
  UNSAFE_className?: string;
  /** Sets inline [style](https://developer.mozilla.org/en-US/docs/Web/API/Element/style) for the element. Only use as a **last resort**. Use style props instead. */
  UNSAFE_style?: CSSProperties;
}

export type UnsafeStyleProps = 'style' | 'className';

export type OmittedExtendedUnsafeStyleProps<E, P> = Omit<E, UnsafeStyleProps & P>;

export type OverloadStyleProps<E> = Omit<E, UnsafeStyleProps> & StyleProps;
