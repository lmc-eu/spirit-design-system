import { CSSProperties } from 'react';
import { SpacingStyleProp } from '../../constants';
import { ExpandableBreakpointToken, ExpandableSpaceToken } from './tokens';

export const STYLE_SPACING_AUTO = 'auto' as const;
export type StyleSpacingAuto = typeof STYLE_SPACING_AUTO;

export type SpacingProps = {
  [key in keyof typeof SpacingStyleProp]?:
    | ExpandableSpaceToken
    | StyleSpacingAuto
    | Partial<Record<ExpandableBreakpointToken, ExpandableSpaceToken | StyleSpacingAuto>>;
};

export interface SpacingProp {
  spacing?: ExpandableSpaceToken | Partial<Record<ExpandableBreakpointToken, ExpandableSpaceToken>>;
}

export interface SpacingCSSProperties extends CSSProperties {
  [index: `--${string}`]: string | undefined | number;
}

export interface StyleProps extends SpacingProps {
  // For backward compatibility!
  /** Sets the CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. Only use as a **last resort**. Use style props instead. */
  UNSAFE_className?: string;
  /** Sets inline [style](https://developer.mozilla.org/en-US/docs/Web/API/Element/style) for the element. Only use as a **last resort**. Use style props instead. */
  UNSAFE_style?: CSSProperties;
}

export type UnsafeStyleProps = 'style' | 'className';

export type OmittedExtendedUnsafeStyleProps<E, P> = Omit<E, UnsafeStyleProps & P>;

export type OverloadStyleProps<E> = Omit<E, UnsafeStyleProps> & StyleProps;
