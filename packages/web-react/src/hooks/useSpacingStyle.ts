import { SpacingProp, SpacingCSSProperties } from '../types';

export function useSpacingStyle(spacing: SpacingProp | undefined, prefix: string): SpacingCSSProperties {
  const style: SpacingCSSProperties = {};

  if (typeof spacing === 'object' && spacing !== null) {
    Object.keys(spacing).forEach((key) => {
      const suffix = key === 'mobile' ? '' : `-${key}`;
      (style as Record<string, string | undefined>)[`--${prefix}-spacing${suffix}`] = `var(--spirit-${spacing[
        key as keyof typeof spacing
      ]?.toString()})`;
    });
  } else if (spacing) {
    (style as Record<string, string | undefined>)[`--${prefix}-spacing`] = `var(--spirit-${spacing})`;
  }

  return style;
}
