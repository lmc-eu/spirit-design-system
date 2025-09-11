import { cssVariablePrefix } from '@lmc-eu/spirit-design-tokens';
import { type DirectionAxis } from '../constants';
import { type SpacingCSSProperties, type SpacingType } from '../types';

export function useSpacingStyle(
  spacing: SpacingType | undefined,
  prefix: string,
  direction: undefined | (typeof DirectionAxis)[keyof typeof DirectionAxis] = undefined,
): SpacingCSSProperties {
  const style: SpacingCSSProperties = {};
  const directionSuffix = direction ? `-${direction}` : '';

  if (typeof spacing === 'object' && spacing !== null) {
    Object.keys(spacing).forEach((key) => {
      const breakpointSuffix = key === 'mobile' ? '' : `-${key}`;
      (style as Record<string, string | undefined>)[`--${prefix}-spacing${directionSuffix}${breakpointSuffix}`] =
        `var(--${cssVariablePrefix}${spacing[key as keyof typeof spacing]?.toString()})`;
    });
  } else if (spacing) {
    (style as Record<string, string | undefined>)[`--${prefix}-spacing${directionSuffix}`] =
      `var(--${cssVariablePrefix}${spacing})`;
  }

  return style;
}
